import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../notfound.css';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404 Página de error </h1>
            <p class="zoom-area">Lo sentimos, la página que estás buscando no existe. </p>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <a href="/home" class="link">Vuelve a la página de inicio</a>
            </div>
        </div>
    )
}
