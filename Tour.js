AFRAME.registerComponent("tour",{
    schema: {
        state: { type: "string", default: "main" },
        places : {}
    },
    init : function(){
        this.createThumbnail();
    },
    createThumbnail:function(){
        const places = {
            bd : {
                main_rotate : {x:0,y:14,z:0},
                id:"bd",
                title:"Bed Room",
                src:"./assets/bd.jpg",
                position : {x:1,y:3.75,z:-10},
                visible : false,
                icon : "./assets/BDicon.png"
            },
            lr : {
                main_rotate : {x:0,y:45,z:0},
                id:"lr",
                title:"Living Room",
                src:"./assets/lr.jpg",
                position : {x:0,y:1.5,z:-7.5},
                visible : true,
                icon : "./assets/icon.png"
            },
            main : {
                main_rotate : {x:0,y:45,z:0},
                id:"main",
                title:"Entry Gate",
                src:"./assets/main.jpg",
                position : {x:9,y:3.5,z:-10},
                visible : false,
                icon : "./assets/EGicon.png"
            },
            k : {
                main_rotate : {x:0,y:-10,z:0},
                id:"k",
                title:"Kitchen",
                src:"./assets/k.jpg",
                position : {x:-8,y:3.5,z:-10},
                visible : false,
                icon : "./assets/Kicon.png"
            },
            wr : {
                main_rotate : {x:0,y:-90,z:0},
                id:"wr",
                title:"Wash Room", 
                src:"./assets/wr.jpg",
                position : {x:0,y:-1,z:-7.5},
                visible : false,
                icon : "./assets/WRicon.png"
            }
        }

        this.data.places = places

        console.log(this.data.places)

        this.createCard(places)
        
        },

    createCard:function(places){
        const placesId = [
            "lr",
            "main",
            "k",
            "bd",
            "wr"
        ];
        
        for(var i = 0 ; i < 5 ; i++){
            var ids = placesId[i]
            var idu = places[ids].id
            console.log(idu)

            var entity = document.createElement("a-entity")
            entity.setAttribute("id",`${places[ids].id}`)
            entity.setAttribute("rotation",{x:0,y:0,z:0})
            entity.setAttribute("position",places[ids].position)
            entity.setAttribute("material",{
                src:places[ids].icon,
            })
            entity.setAttribute("geometry",{
                primitive : "circle",
                radius:1
            })
            entity.setAttribute("cursor-listener",{})
            entity.setAttribute("visible",places[ids].visible)
            entity.setAttribute("look-at","#camera")

            const text = document.createElement("a-entity")
            text.setAttribute("id",`text-${places[ids].id}`)
            text.setAttribute("position",{x:0,y:-0.5,z:1})
            text.setAttribute("text",{
                value : places[ids].title,
                align : "center",
                color : "black",
                width : 10,
                font : "exo2bold"
            })

            entity.appendChild(text)
            const placeContainer = document.querySelector("#places-container")
            placeContainer.appendChild(entity)

        }


    },

    createText:function(places){
        

        console.log("done1")

    }

})