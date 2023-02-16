#Stateless component:

 var component_ = StarkUi.Component("div",{ style:{ color:"white"} },"StarkUI Component");
 
#Statefull component:

 const Button_ = StarkUi.Class({
     defaultProps(){
         return {
             text:"This is a button"
         };
     }
     defaultState(){
         return {};
     }
     render(){
         let props=this.getProps(),
             text=props.text;
         return StarkUi.Component("div",{ style:{ color:"white"} },text);
     }
 });
 
 var button_ = StarkUi.Component(Button_,{ text:"Button text" });
 
#Render funtion:

 var component_ = StarkUi.Component("div",{ style:{ color:"white"} },"StarkUI Component");
 let element_ = document.getElementById("element_id");
 StarkUi.Render(component_,element_);
 
#StarkUI Store:
 let Store_=StarkUi.Store();
 
 #set state channged listeners with Store_.subscribe(callback:(store)=>{})


