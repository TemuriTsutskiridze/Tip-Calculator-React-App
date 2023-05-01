import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }



    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

    :root {
        --pure-white: #FFFFFF;
        --green-light: #C5E4E7;
        --green-semi-bold: #26C2AE;
        --green-bold: #00474B;
        --gray-dark: #5E7A7D;
        --gray-light: #F3F9FA;
        --red: #E17457;
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        font-family: 'Space Mono', monospace;
        font-weight: 700;
        background: var(--green-light);
        overflow-x: hidden;
    }

    * {
        font-weight: 700;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: inherit;
    }
`