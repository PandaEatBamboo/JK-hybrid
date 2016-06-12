
  function FinishAllLoading(){
    $("#LoadingPage").animate({
    opacity: 0
    }, 1500, function() {
      $("#LoadingPage").remove();
    });
  }
