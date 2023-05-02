import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, pagination, refinementList } from 'instantsearch.js/es/widgets';
import aa from 'search-insights';

import resultHit from '../templates/result-hit';

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
      insights: true,
      insightsClient: aa,
    });

    aa('setUserToken', 'user-id');

  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {


    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {          
          item(hit, sendEvent ) {
            return `
            <a class="result-hit" onClick="${() => sendEvent('click', hit, 'Product Clicked')}">
            <div class="result-hit__image-container">
              <img class="result-hit__image" src="${hit.image}" />
            </div>
            <div class="result-hit__details">
              <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
              <p class="result-hit__price">$${hit.price}</p>
            </div>
            <div class="result-hit__controls">
              <button id="view-item" class="result-hit__view">View</button>
              <button onClick="${() => sendEvent('click', hit, 'Product Converted - Add to cart')}" id="add-to-cart" class="result-hit__cart" >Add To Cart</button>
            </div>
          </a>
            `;
          },
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
