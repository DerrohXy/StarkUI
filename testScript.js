const {
    AudioView,Activity,Application,Button,ButtonStyles,CustomColors,ColorInput,CheckButton,CloseDialog,ClearTooltips,ClearToasts,ClearDialogs,CollapseView,Caption,Canvas,Class,Component,DatetimeInput,
    DateInput,Events,Embed,FooterBar,FileInput,FlowLayout,GridLayout,HorizontalLayout,HorizontalScrollWindow,HideTooltip,HideToast,Heading1,Heading2,Heading3,Heading4,Heading5,Heading6,
    Icon,Initialize,ImageView,Iframe,IconStyles,ImageStyles,InstanceReference,LinearGradient,LinearGradientDirections,
    ListItem,Link,Layout,Label,MenuItem,Menu,MenuBar,MonthInput,NumberInput,NavigationBar,OptionItem,OrderedList,ProgressBar,Paragraph,PasswordInput,ProgressIndicator,Render,RelativeLayout,RadioGroup,
    RadioButton,RadialGradient,Store,ShowTooltip,ShowToast,ShowMessageDialog,ShowInputDialog,ShowDialog,ShowConfirmDialog,Slider,Switch,SelectionView,ScrollWindow,TimeInput,TextInput,TextArea,TableRow,
    TableHeading,TableHeader,TableFooter,TableData,TableBody,Table,TabbedWindow,TabbedView,UnorderedList,VideoView,VerticalLayout,VerticalScrollWindow,WeekInput
} =StarkUIComponents;

function WidthFiller(){
    return FlowLayout({
        components:[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0].map((x)=>{
            return Label({
                text:"",
                style:{
                    width:"100px"
                }
            })
        })
    })
}

function createDisplay() {
    let baseElement = document.getElementById("base-element"),
        mainLayout = VerticalLayout({
            className: "random-class",
            style: {
                padding: "5px",
            },
            components: [
                MenuBar({
                    menus: [
                        Menu({
                            text: "Menu example 1",
                            menuComponent: Button({ text: "Menu content" })
                        }),
                        Menu({
                            text: "Menu example 2",
                            menuItems: [
                                MenuItem({ text: "Menu item 4" }),
                                MenuItem({ text: "Menu item 5" }),
                                MenuItem({ text: "Menu item 6" })
                            ]
                        })
                    ]
                }),
                Button({
                    text: "Push button",
                    contextMenuComponent: Button({ text: "Context menu" })
                }),
                CheckButton({
                    text: "Check button",
                }),
                RadioButton({
                    text: "Radio button",
                }),
                RadioGroup({
                    buttons: [{
                        text: "Radio button 1",
                        id: "_id_1_"
                    },
                        {
                            text: "Radio button 2",
                            id: "_id_2_"
                        },
                        {
                            text: "Radio button 3",
                            id: "_id_3_"
                        }
                    ]
                }),
                ColorInput(),
                DateInput(),
                DatetimeInput(),
                MonthInput(),
                TimeInput(),
                WeekInput(),
                Label({ text: "This is a Label" }),
                Link({ text: "Link example", href: "#" }),
                ProgressBar(),
                VideoView(),
                AudioView(),
                ProgressIndicator(),
                TextInput({
                    placeholder: "Input text",
                    onEnterKey: () => {
                        console.log("Enter pressed");
                    }
                }),
                PasswordInput({
                    placeholder: "Input password",
                    onEnterKey: () => {
                        console.log("Enter pressed");
                    }
                }),
                NumberInput(),
                TextArea(),
                FileInput(),
                CollapseView({
                    title: "Collapse view",
                    component: Button({ text: "Collapsed button" })
                }),
                SelectionView({
                    optionItems: [
                        OptionItem({ text: "Selection item 1", value: "Selection item 1" }),
                        OptionItem({ text: "Selection item 2", value: "Selection item 2" }),
                        OptionItem({ text: "Selection item 3", value: "Selection item 3" })
                    ]
                }),
                OrderedList({
                    listItems:[
                        ListItem({text:"List item 1"}),
                        ListItem({
                            component:OrderedList({
                                listItems:[
                                    ListItem({text:"List item 4"}),
                                    ListItem({text:"List item 5"}),
                                    ListItem({text:"List item 6"})
                                ]
                            })
                        }),
                        ListItem({text:"List item 3"})
                    ]
                }),
                UnorderedList({
                    listItems:[
                        ListItem({text:"List item 4"}),
                        ListItem({text:"List item 5"}),
                        ListItem({text:"List item 6"})
                    ]
                }),
                TabbedWindow({
                    onCurrentTabChanged: (in_) => {
                        console.log(in_);
                    },
                    tabs: [{
                        title: "Tab 1",
                        component: HorizontalLayout({
                            style:{
                                backgroundImage:LinearGradient(LinearGradientDirections.RIGHT,CustomColors.BLUE3,CustomColors.GREEN5),
                                height:"100px"
                            },
                            components:[
                                WidthFiller()
                            ]
                        })
                    },
                        {
                            title: "Tab 2",
                            component: HorizontalLayout({
                                style:{
                                    backgroundColor:CustomColors.ORANGE5,
                                    height:"100px"
                                },
                                components:[
                                    WidthFiller()
                                ]
                            })
                        },
                        {
                            title: "Tab 3",
                            component:HorizontalLayout({
                                style:{
                                    backgroundColor:CustomColors.RED5,
                                    height:"100px"
                                },
                                components:[
                                    WidthFiller()
                                ]
                            })
                        },
                        {
                            title: "Tab 4",
                            component: HorizontalLayout({
                                style:{
                                    backgroundColor:CustomColors.BLUE5,
                                    height:"100px"
                                },
                                components:[
                                    WidthFiller()
                                ]
                            })
                        }
                    ]
                }),
                TabbedView({
                    onCurrentTabChanged: (in_) => {
                        console.log(in_);
                    },
                    tabs: [{
                        title: "Tab 1",
                        component: HorizontalLayout({
                            style:{
                                backgroundColor:CustomColors.GREEN5,
                                height:"100px"
                            },
                            components:[
                                WidthFiller()
                            ]
                        })
                    },
                        {
                            title: "Tab 2",
                            component: HorizontalLayout({
                                style:{
                                    backgroundImage:RadialGradient(CustomColors.BLUE3,CustomColors.GREEN5),
                                    height:"100px"
                                },
                                components:[
                                    WidthFiller()
                                ]
                            })
                        },
                        {
                            title: "Tab 3",
                            component:HorizontalLayout({
                                style:{
                                    backgroundColor:CustomColors.RED5,
                                    height:"100px"
                                },
                                components:[
                                    WidthFiller()
                                ]
                            })
                        },
                        {
                            title: "Tab 4",
                            component: HorizontalLayout({
                                style:{
                                    backgroundColor:CustomColors.BLUE5,
                                    height:"100px"
                                },
                                components:[
                                    WidthFiller()
                                ]
                            })
                        }
                    ]
                }),
                Slider({
                    min: 1,
                    max: 100
                }),
                Table({
                    components:[
                        TableHeading({
                            components:[
                                TableRow({
                                    components:[
                                        TableData({
                                            text:"H1"
                                        }),
                                        TableData({
                                            text:"H2"
                                        }),
                                        TableData({
                                            text:"H3"
                                        })
                                    ]
                                }),
                            ]
                        }),
                        TableBody({
                            components:[
                                TableRow({
                                    components:[
                                        TableData({
                                            text:"A1"
                                        }),
                                        TableData({
                                            text:"A2"
                                        }),
                                        TableData({
                                            text:"A3"
                                        })
                                    ]
                                }),
                                TableRow({
                                    components:[
                                        TableData({
                                            text:"A1"
                                        }),
                                        TableData({
                                            text:"A2"
                                        }),
                                        TableData({
                                            text:"A3"
                                        })
                                    ]
                                }),
                                TableRow({
                                    components:[
                                        TableData({
                                            text:"A1"
                                        }),
                                        TableData({
                                            text:"A2"
                                        }),
                                        TableData({
                                            text:"A3"
                                        })
                                    ]
                                })
                            ]
                        }),
                        TableFooter({
                            components:[
                                TableRow({
                                    components:[
                                        TableData({
                                            text:"F1"
                                        }),
                                        TableData({
                                            text:"F2"
                                        }),
                                        TableData({
                                            text:"F3"
                                        })
                                    ]
                                }),
                            ]
                        }),
                    ]
                }),
                Switch(),
                FlowLayout({
                    components:Object.keys(CustomColors).map((key)=>{
                        return VerticalLayout({
                            style:{
                                margin:"2px"
                            },
                            components:[
                                HorizontalLayout({
                                    style:{
                                        width:"150px",
                                        height:"150px",
                                        backgroundColor:CustomColors[key]
                                    }
                                }),
                                Label({
                                    style:{
                                        margin:"5px"
                                    },
                                    text:key
                                })
                            ]
                        })
                    })
                }),
                Canvas({
                    width: "300",
                    height: "300"
                })
            ]
        }),
        navigationBar = NavigationBar({
            style: {
                backgroundColor: CustomColors.WHITE5
            },
            menuDrawer: Button({ text: "Menu drawer" }),
            navigationDrawer: VerticalLayout({
                components: [
                    Button({ text: "Navigation drawer" })
                ]
            }),
            components: [
                Button({
                    text: "Nav button1"
                }),
                Button({
                    text: "Nav button2"
                }),
                Button({
                    text: "Nav button3"
                })
            ]
        }),
        footerBar = FooterBar({
            style: {
                backgroundColor: CustomColors.WHITE5
            },
            components: [
                Button({ text: "Footer button1" }),
                Button({ text: "Footer button2" }),
                Button({ text: "Footer button3" })
            ]
        }),
        mainActivity = Activity({
            mainComponent: mainLayout,
            navigationBar: navigationBar,
            footerBar: footerBar
        }),
        mainApplication = Application({
            baseElement: baseElement
        });
    mainApplication.showActivity(mainActivity, "Main");
}

function showDialogExample() {
    ShowInputDialog({
        prompt: "This is an input dialog",
        title:"input dialog"
    })
}

window.onload = () => {
    Initialize();
    createDisplay();
    ShowToast("Hello there user...");
    showDialogExample();
}
