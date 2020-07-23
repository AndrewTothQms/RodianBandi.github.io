$('#myCollapsible').collapse({
    toggle: true
  })

  $('#myCollapsible').on('shown.bs.collapse', function () {
    // do something...
  })

  $('.collapse').collapse()

  $('.dropdown-toggle').dropdown()

  $('#myDropdown').on('show.bs.dropdown', function () {
    // do something...
  })

  function(t) {
    t.preventDefault(), t.stopPropagation(), Ft._jQueryInterface.call(e(this), "toggle")
  }

  function(e) {
    e.preventDefault(), e.stopPropagation(), t.toggle()
  }

  function(e) {
    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
  }

  function(n) {
    if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length) : !jt.test(n.which)) && !this.disabled && !e(this).hasClass("disabled")) {
      var i = t._getParentFromElement(this),
        o = e(i).hasClass("show");
      if (o || 27 !== n.which) {
        if (n.preventDefault(), n.stopPropagation(), !o || o && (27 === n.which || 32 === n.which)) return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
        var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
          return e(t).is(":visible")
        }));
        if (0 !== r.length) {
          var s = r.indexOf(n.target);
          38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
        }
      }
    }
  }