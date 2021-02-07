import "./BreakdownPage.css";
import React, { useRef, useEffect, useState, Componenet } from "react";
import axios from "axios";
import DomParser from "dom-parser";

function BreakdownPage() {
    const [ingredients, setIngredients] = useState([""]);
    const [recipes, setRecipes] = useState([""]);
    const [load, setLoad] = useState(false);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        var parser = new DomParser();
        const queryString = window.location.search;
        //console.log(queryString);
        const urlParams = new URLSearchParams(queryString);

        const budget = urlParams.get('budget');
        const vegan = urlParams.get('v');
        const vegetarian = urlParams.get('vege');
        const gluten = urlParams.get('g');
        const dairy = urlParams.get('d');
        const peanut = urlParams.get('p');

        var diet = '';
        var intolerance = '';

        if (vegetarian)
            diet = 'vegetarian';
        if (vegan)
            diet = 'vegan';

        if (gluten)
            intolerance += 'gluten';

        if (dairy && gluten)
            intolerance += ', dairy';
        else if (dairy)
            intolerance += 'dairy';

        if (peanut && (dairy || gluten))
            intolerance += ', peanut';
        else if (peanut)
            intolerance += 'peanut';

        var options = {
            method: 'GET',
            url: 'https://api.spoonacular.com/recipes/complexSearch',
            params: {
                apiKey: "196e4af7a9a74e89a2e6d6ab3ceeba50",
                diet: diet,
                intolerances: intolerance,
                number: '7',
            },

        };

        axios.request(options).then((response) => {
            var rec = response.data.results;
            setRecipes(rec);
            rec.forEach((r) => {
                var title = r.title;

                axios.get(formatUrl(title,r.id))
                    .then((res) => {
                        var dom = parser.parseFromString(res.data);

                        var ingr = dom.getElementsByClassName('spoonacular-ingredient');

                        var newIngr = [];

                        ingr.forEach((i) => newIngr.push(i.childNodes[3].childNodes[0].text));

                        setIngredients([...ingredients, `${newIngr}`]);

                    });
            })

        }).catch((error) => {
            console.error(error);
        })
        .then(() => {
            setLoad(true);
        })



    }, [])

    const formatUrl = (title,id) => {
        title = title.replace(/,/g, '');
        title = title.replace(/'/g, '');
        title = title.replace(/\s/g, '-');
        title = title.replace(/&/g, '-amp-');

        title += '-' + id;

        title = "https://spoonacular.com/recipes/" + title;

        return title;
    }

    return (
        <div className="back">
            <div className="Title">
                <h1> $crunch's Weekly list and recipes for you! Enjoy:</h1>
                <div className="row">
                    <div className="right">
                        <h2>Grocery List</h2>
                        {
                            ingredients.map((ing, i) => {
                                return (
                                    <p className="ingredient" key={i}>{ing}</p>
                                );
                            })
                        }
                    </div>
                    <div className="left">
                        <h2>Weekly Recipes</h2>
                        {   load ? 
                            recipes.map((r, i) => {
                                return (
                                    <div key={i}>
                                        <h1>
                                            {days[i]}
                                        </h1>
                                        <a href={formatUrl(r.title, r.id)}>
                                            {r.title}
                                        </a>

                                    </div>
                                )
                            }) : ""
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BreakdownPage;
