/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
    $("#my-carousel0 .carousel-indicators li").hover(function(){
        var goto = Number( $(this).attr('data-slide-to') );
        $("#my-carousel0").carousel(goto);  
      });
    $("#my-carousel1 .carousel-indicators li").hover(function(){
        var goto = Number( $(this).attr('data-slide-to') );
        $("#my-carousel1").carousel(goto);  
        });
    $("#my-carousel2 .carousel-indicators li").hover(function(){
        var goto = Number( $(this).attr('data-slide-to') );
        $("#my-carousel2").carousel(goto);  
        });
    console.log("The answer is don't think about it!")
  });
}