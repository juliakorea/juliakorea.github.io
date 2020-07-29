function blame(pagename) {
  var translated = ["index", "manual/complex-and-rational-numbers", "manual/functions", "manual/getting-started", "manual/integers-and-floating-point-numbers", "manual/introduction", "manual/mathematical-operations", "manual/variables", "phdthesis/chap6"];
  if (-1 == $.inArray(pagename, translated)) {
    window.open("https://github.com/JuliaLang/julia/blame/master/doc/" + pagename + ".rst", "blame");
  } else {
    window.open("https://github.com/juliakorea/doc/blame/master/src/julia/doc/" + pagename + ".rst.txt", "blame");
  }
}

