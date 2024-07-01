AFRAME.registerComponent("cursor-listener",{
    schema:{
        recent : {type : "string" , default : ""}
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        this.handleClickEvents();
    },
    handleMouseEnterEvents: function() {
        this.el.addEventListener("mouseenter", () => {
          const placeContainer = document.querySelector("#places-container");
          const { state } = placeContainer.getAttribute("tour");
          this.handlePlacesListState();
        });
      },
      handlePlacesListState: function() {
        const id = this.el.getAttribute("id");
        const placesId = ["main", "lr", "wr", "k","bd"];
        if (placesId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          this.el.setAttribute("material", {
            color:"#D76B30",
            opacity: 1
          });
        }
      },
      handleMouseLeaveEvents: function() {
        this.el.addEventListener("mouseleave", () => {
          const placesContainer = document.querySelector("#places-container");
          const { state } = placesContainer.getAttribute("tour");
          this.el.setAttribute("material", {
                color: "#FFFFFF",
                opacity: 1
              });
        });
      },
      handleClickEvents:function() {
        this.el.addEventListener("click", () => {
          const placesContainer = document.querySelector("#places-container");
          const { places } = placesContainer.getAttribute("tour");
          const id = this.el.getAttribute("id");
          const visiblity = this.el.getAttribute("visible")
          const placesId = [
              "lr",
              "main",
              "k",
              "bd",
              "wr"
            ];
          if (placesId.includes(id) && visiblity == true ) {
            const sky = document.querySelector("#main-container")
            sky.setAttribute("rotation",places[id].main_rotate)
            sky.setAttribute("src",places[id].src) 
            this.data.recent = id
            this.el.setAttribute("visible",false)
            if(id == "lr"){
              for(var i = 1 ; i<5 ;i++){
                var card = document.querySelector(`#${placesId[i]}`)  
                card.setAttribute("visible",true)
              }
            }
            else if(id == "main" || id == "k"){
              for(var i = 0 ; i<5 ;i++){
                var card = document.querySelector(`#${placesId[i]}`)
                if(i == 0){
                  card.setAttribute("visible",true)
                }
                else{ 
                  card.setAttribute("visible",false)
                }
              }
            }
            else if(id == "wr" || id == "bd"){
              var lr = document.querySelector("#lr")
              lr.setAttribute("visible",true)
              for(var i = 1 ; i<5 ;i++){
                var card = document.querySelector(`#${placesId[i]}`)
                if(i <=2){
                  card.setAttribute("visible",false)
                }
                else{
                  if(id != placesId[i]){
                    card.setAttribute("visible",true)
                  }
                }
              }
            }
          }          
        });
      },
})