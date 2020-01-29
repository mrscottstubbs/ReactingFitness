render: function() {
  return (
    React.DOM.table({className: "exercise"},
      React.DOM.thead(null,
        React.DOM.tr(null,
          this.props.titles.map(function(title) {
            return React.DOM.th({key: title}, title);
          })
        )
      ),
      React.DOM.tbody(null,
        this.props.rows.map(function(row, i) {
          return (
            React.DOM.tr({key: i},
              row.map(function(col, j) {
                return React.DOM.td({key: j}, col);
              })
            )
          );
        })
      )
    )
  );
}
