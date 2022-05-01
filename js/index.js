"use strict";
import Tree from './tree.js';

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
            let treeURL = 'https://bruxellesdata.opendatasoft.com/api/v2/catalog/datasets/opmerkelijke-bomen/exports/json';
            try {
              let resp = fetch(treeURL);
              return resp.json();
            } catch (error) {
              console.log(error);
            }
    },
    onSearch() {
    },
    render(textFilter) {
        let trees = this.getData();
        let html = '<div class="collectionsize"><h1>Collection Size '+ trees.size + '</h1></div>';
        trees.forEach( tree => {
        if (tree.soort.includes(textFilter)) {
            let htmlSegment = '<div class="tree"><h2>${tree.soort}</h2>omtrek van ${tree.omtrek} cm</div>';
            html += htmlSegment;  
        }
        });
        let container = document.querySelector('.container');
        container.innerHTML = html;  
    }

}
app.init()
let textFilter = "zomereik";
app.render(textFilter);