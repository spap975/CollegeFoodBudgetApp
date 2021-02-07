import "./BreakdownPage.css";
import React, { useRef, useEffect, useState, Componenet } from "react";

function BreakdownPage() {

  const inputRef = useRef("");

  const handleSubmit = () => {
    
  }

  return (
    <div className="Title" style={{ background: '#e1f5ba'}}>
      <div className="Title" style={{ background: '#e1f5ba', width: '100%',textAlign: 'center'}}>
      <h1> $crunch's Weekly list and recipes for you! Enjoy:</h1>
      </div>
      <div className="row">
        <div className="column" style={{ background: '#e1f5ba', width: '50%',textAlign: 'center'}}>
            <h2>Grocery List</h2>
            <p>Data..</p>
        </div>
        <div className="column" style={{ background: '#f1fae1', width: '50%',textAlign: 'center'}}>
            <h2>Weekly Recipes</h2>
            <p>Data..</p>
        </div>
    </div>
    </div>
    
  );
}

export default BreakdownPage;
