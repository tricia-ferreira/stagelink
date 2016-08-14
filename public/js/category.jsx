var app = app || {};

(function () {
  'use strict';

  app.TodoCategory = React.createClass({
    render: function () {
      var activeCat = this.props.activeCat;
      return (
        <section className="activeCat">
          <ul className="categoriesList">
            <li>
              <a
                href="#/all_categories"
                className={classNames({selected: activeCat === app.ALL_TODOS})}>
                  All
              </a>
            </li>
            {' '}
            <li>
              <a
                href="#/category_one"
                className={classNames({selected: activeCat === app.CAT_ONE})}>
                  Category One
              </a>
            </li>
            {' '}
            <li>
              <a
                href="#/category_two"
                className={classNames({selected: activeCat === app.CAT_TWO})}>
                  Category Two
              </a>
            </li>
          </ul>
        </section>
      );
    }
  });
})();
