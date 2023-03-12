const _events_ = {
        ABORT: "",
        ANIMATION_CANCEL: "",
        ANIMATION_END: "",
        ANIMATION_ITERATION: "",
        ANIMATION_START: "",
        AUX_CLICK: "",
        BLUR: "",
        CAN_PLAY: "",
        CAN_PLAY_THROUGH: "",
        CHANGE: "",
        CLICK: "",
        CLOSE: "",
        CONTEXT_MENU: "",
        COPY: "",
        CUE_CHANGE: "",
        CUT: "",
        DBL_CLICK: "",
        DRAG: "",
        DRAG_END: "",
        DRAG_ENTER: "",
        DRAG_LEAVE: "",
        DRAG_OVER: "",
        DRAG_START: "",
        DROP: "",
        DURATION_CHANGE: "",
        EMPTIED: "",
        ENDED: "",
        ERROR: "",
        FOCUS: "",
        FORM_DATA: "",
        FULL_SCREEN_CHANGE: "",
        FULL_SCREEN_ERROR: "",
        GOT_POINTER_CAPTURE: "",
        INPUT: "",
        INVALID: "",
        KEY_DOWN: "",
        KEY_UP: "",
        LOAD: "",
        LOADED_DATA: "",
        LOADED_METADATA: "",
        LOAD_START: "",
        LOST_POINTER_CAPTURE: "",
        MOUSE_DOWN: "",
        MOUSE_ENTER: "",
        MOUSE_LEAVE: "",
        MOUSE_MOVE: "",
        MOUSE_OUT: "",
        MOUSE_OVER: "",
        MOUSE_UP: "",
        PASTE: "",
        PAUSE: "",
        PLAY: "",
        PLAYING: "",
        POINTER_CANCEL: "",
        POINTER_DOWN: "",
        POINTER_ENTER: "",
        POINTER_LEAVE: "",
        POINTER_MOVE: "",
        POINTER_OUT: "",
        POINTER_UP: "",
        PROGRESS: "",
        RATE_CHANGE: "",
        RESET: "",
        RESIZE: "",
        SCROLL: "",
        SEEKED: "",
        SEEKING: "",
        SELECT: "",
        SELECTION_CHANGE: "",
        SELECT_START: "",
        STALLED: "",
        SUBMIT: "",
        SUSPEND: "",
        TIME_UPDATE: "",
        TOGGLE: "",
        TOUCH_CANCEL: "",
        TOUCH_END: "",
        TOUCH_MOVE: "",
        TOUCH_START: "",
        TRANSITION_CANCEL: "",
        TRANSITION_END: "",
        TRANSITION_RUN: "",
        TRANSITION_START: "",
        VOLUME_CHANGE: "",
        WAITING: "",
        WEBKIT_ANIMATION_END: "",
        WEBKIT_ANIMATION_ITERATION: "",
        WEBKIT_ANIMATION_START: "",
        WEBKIT_TRANSITION_END: "",
        WHEEL: ""
    },
    _icon_styles_ = {
        S: {
            margin: "5px",
            width: "20px",
            height: "20px"
        },
        XS: {
            margin: "5px",
            width: "15px",
            height: "15px"
        },
        N: {
            margin: "5px",
            width: "30px",
            height: "30px"
        },
        L: {
            margin: "5px",
            width: "50px",
            height: "50px"
        },
        XL: {
            margin: "5px",
            width: "75px",
            height: "75px"
        },
        XXL: {
            margin: "5px",
            width: "100px",
            height: "100px"
        }
    },
    _image_styles_ = _icon_styles_,
    _button_styles_ = {
        S: {
            margin: "5px",
            padding: "3px"
        },
        XS: {
            margin: "5px"
        },
        N: {
            margin: "5px",
            padding: "5px"
        },
        L: {
            margin: "5px",
            padding: "5px",
            minHeight: "30px"
        },
        XL: {
            margin: "5px",
            padding: "5px",
            minHeight: "40px"
        }
    },
    _custom_colors_ = {
        BLUE1: "#99C1F1",
        BLUE2: "#62A0EA",
        BLUE3: "#3584E4",
        BLUE4: "#1C71D8",
        BLUE5: "#1A5FB4",
        GREEN1: "#8FF0A4",
        GREEN2: "#57E3A9",
        GREEN3: "#33D17A",
        GREEN4: "#2EC27E",
        GREEN5: "#26A269",
        YELLOW1: "#F9F06B",
        YELLOW2: "#F8E45C",
        YELLOW3: "#F6D32D",
        YELLOW4: "#F5C211",
        YELLOW5: "#E5A50A",
        ORANGE1: "#FFBE6F",
        ORANGE2: "#FFA348",
        ORANGE3: "#FF7800",
        ORANGE4: "#E66100",
        ORANGE5: "#C64600",
        RED1: "#F66151",
        RED2: "#ED333B",
        RED3: "#E01B24",
        RED4: "#C01C28",
        RED5: "#A51D2D",
        PURPLE1: "#DC8ADD",
        PURPLE2: "#C061CB",
        PURPLE3: "#9141AC",
        PURPLE4: "#813D9C",
        PURPLE5: "#613583",
        BROWN1: "#CDAB8F",
        BROWN2: "#B5835A",
        BROWN3: "#986A44",
        BROWN4: "#865E3C",
        BROWN5: "#63452C",
        GRAY1: "#FFFFFF",
        GRAY2: "#F6F5F4",
        GRAY3: "#DEDDDA",
        GRAY4: "#C0BFBC",
        GRAY5: "#9A9996",
        BLACK1: "#77767B",
        BLACK2: "#5E5C64",
        BLACK3: "#3D3846",
        BLACK4: "#241F31",
        BLACK5: "#000000",
        WHITE1: "#9A9996",
        WHITE2: "#C0BFBC",
        WHITE3: "#DEDDDA",
        WHITE4: "#F6F5F4",
        WHITE5: "#FFFFFF",
        BRIGHT_BLUE: "#51E2F5",
        BLUE_GREEN: "#9DF9EF",
        DUSTY_WHITE: "#EDF756",
        PINK_SAND: "#FFA8B6",
        DARK_SAND: "#A28089",
        ICE_COLD: "#A0D2EB",
        FREEZE_PURPLE: "#E5EAF5",
        MEDIUM_PURPLE: "#D0BDF4",
        PURPLE_PAIN: "#8458B3",
        HEAVY_PURPLE: "#A28089",
        ROYAL_BLUE: " #00539CFF",
        PEACH: "#EEA47FFF",
        CLASSIC_BLUE: "#2F3C7E",
        CLASSIC_PINK: "#FBEAEB",
        CLASSIC_YELLOW: "#FEE715FF ",
        CHARCOAL: "#101820FF",
        LIME_GREEN: "#CCF381",
        ELECTRIC_BLUE: "#4831D4",
        LAVENDER: "#E2D1F9",
        TEAL: "#317773",
        CHERRY_RED: "#990011FF",
        OFF_WHITE: "#FCF6F5FF",
        BURNT_ORANGE: "#EE4E34",
        MUSTARD: "#E3B448",
        SAGE: "#CBD18F",
        FOREST_GREEN: "#3A6B35",
        SCARLET: "#B85042",
        LIGHT_OLIVE: "#E7E8D1",
        LIGHT_TEAL: "#A7BEAE",
        MAROON: "#7A2048",
        INDIGO: "#1E2761",
        VERDANT_GREEN: "#2C5F2DFF",
        ISLAND_GREEN: "#2BAE66FF",
        SPICED_APPLE: "#783937FF",
        RASPBERRY: "#8A307F",
    };

const _animation_classes_={
    STARK_UI_PULSATING:"",
    STARK_UI_SPINNING:"",
    STARK_UI_SLIDE_IN_LEFT:"",
    STARK_UI_SLIDE_IN_LEFT_SLOW:"",
    STARK_UI_SLIDE_IN_LEFT_FAST:"",
    STARK_UI_SLIDE_OUT_LEFT:"",
    STARK_UI_SLIDE_OUT_LEFT_SLOW:"",
    STARK_UI_SLIDE_OUT_LEFT_FAST:"",
    STARK_UI_SLIDE_IN_RIGHT:"",
    STARK_UI_SLIDE_IN_RIGHT_SLOW:"",
    STARK_UI_SLIDE_IN_RIGHT_FAST:"",
    STARK_UI_SLIDE_OUT_RIGHT:"",
    STARK_UI_SLIDE_OUT_RIGHT_SLOW:"",
    STARK_UI_SLIDE_OUT_RIGHT_FAST:"",
    STARK_UI_SLIDE_IN_TOP:"",
    STARK_UI_SLIDE_IN_TOP_SLOW:"",
    STARK_UI_SLIDE_IN_TOP_FAST:"",
    STARK_UI_SLIDE_OUT_TOP:"",
    STARK_UI_SLIDE_OUT_TOP_FAST:"",
    STARK_UI_SLIDE_OUT_TOP_SLOW:"",
    STARK_UI_SLIDE_IN_BOTTOM:"",
    STARK_UI_SLIDE_IN_BOTTOM_SLOW:"",
    STARK_UI_SLIDE_IN_BOTTOM_FAST:"",
    STARK_UI_SLIDE_OUT_BOTTOM:"",
    STARK_UI_SLIDE_OUT_BOTTOM_SLOW:"",
    STARK_UI_SLIDE_OUT_BOTTOM_FAST:"",
}

const _classes_={
    ..._animation_classes_,
    STARK_UI_HIDDEN:"",
    STARK_UI_BUTTON:"",
    STARK_UI_LABEL:"",
    STARK_UI_PARAGRAPH:"",
    STARK_UI_ICON:"",
    STARK_UI_HEADING:"",
    STARK_UI_LINK:"",
    STARK_UI_IMAGE_VIEW:"",
    STARK_UI_VIDEO_VIEW:"",
    STARK_UI_AUDIO_VIEW:"",
    STARK_UI_TEXT_INPUT:"",
    STARK_UI_NUMBER_INPUT:"",
    STARK_UI_WEEK_INPUT:"",
    STARK_UI_TIME_INPUT:"",
    STARK_UI_MONTH_INPUT:"",
    STARK_UI_DATETIME_INPUT:"",
    STARK_UI_DATE_INPUT:"",
    STARK_UI_DATE_TIME_INPUT:"",
    STARK_UI_TEXT_AREA:"",
    STARK_UI_PASSWORD_INPUT:"",
    STARK_UI_COLOR_INPUT:"",
    STARK_UI_FILE_INPUT:"",
    STARK_UI_SELECTION_VIEW:"",
    STARK_UI_PROGRESS_BAR:"",
    STARK_UI_SLIDER:"",
    STARK_UI_PROGRESS_INDICATOR:"",
    STARK_UI_OPTION_ITEM:"",
    STARK_UI_CHECK_BUTTON:"",
    STARK_UI_CHECK_BUTTON_CHECK_BOX:"",
    STARK_UI_RADIO_BUTTON:"",
    STARK_UI_RADIO_BUTTON_CHECK_BOX:"",
    STARK_UI_RADIO_GROUP:"",
    STARK_UI_SWITCH:"",
    STARK_UI_SWITCH_ACTIVE:"",
    STARK_UI_SWITCH_FILLER:"",
    STARK_UI_SWITCH_TOGGLE_ACTIVE:"",
    STARK_UI_SWITCH_TOGGLE_INACTIVE:"",
    STARK_UI_DIALOG:"",
    STARK_UI_DIALOG_WINDOW:"",
    STARK_UI_DIALOG_TITLE_BAR:"",
    STARK_UI_MENU:"",
    STARK_UI_MENU_ACTIVE:"",
    STARK_UI_MENU_DROPDOWN:"",
    STARK_UI_MENU_ITEM:"",
    STARK_UI_MENU_BAR:"",
    STARK_UI_TABBED_WINDOW:"",
    STARK_UI_TABBED_VIEW:"",
    STARK_UI_TABBED_WINDOW_TABS_BAR:"",
    STARK_UI_TABBED_WINDOW_TAB_CONTAINER:"",
    STARK_UI_TABBED_WINDOW_TITLE_BAR:"",
    STARK_UI_TABBED_WINDOW_CONTENT_AREA:"",
    STARK_UI_TABBED_VIEW_CONTENT_AREA:"",
    STARK_UI_TABBED_VIEW_HEADER:"",
    STARK_UI_TABBED_VIEW_TITLE_BAR:"",
    STARK_UI_TABBED_WINDOW_TITLE_BAR_CENTERED:"",
    STARK_UI_TABBED_WINDOW_TITLE_BAR_SPACED:"",
    STARK_UI_TABBED_WINDOW_TITLE_BAR_RIGHT:"",
    STARK_UI_TAB_ACTIVE:"",
    STARK_UI_TAB_INACTIVE:"",
    STARK_UI_CANVAS:"",
    STARK_UI_CONTEXT_MENU:"",
    STARK_UI_CONTEXT_MENU_TITLE_BAR:"",
    STARK_UI_TOOLTIP:"",
    STARK_UI_COLLAPSE_VIEW:"",
    STARK_UI_COLLAPSE_VIEW_TITLE_BAR:"",
    STARK_UI_COLLAPSE_VIEW_DROPDOWN:"",
    STARK_UI_TOAST:"",
    STARK_UI_ORDERED_LIST:"",
    STARK_UI_UNORDERED_LIST:"",
    STARK_UI_LIST_ITEM:"",
    STARK_UI_TABLE:"",
    STARK_UI_TABLE_HEADING:"",
    STARK_UI_TABLE_FOOTER:"",
    STARK_UI_TABLE_BODY:"",
    STARK_UI_TABLE_ROW:"",
    STARK_UI_TABLE_DATA:"",
    STARK_UI_TABLE_HEADER:"",
    STARK_UI_CAPTION:"",
    STARK_UI_EMBED:"",
    STARK_UI_IFRAME:"",
    STARK_UI_LAYOUT:"",
    STARK_UI_VERTICAL_LAYOUT:"",
    STARK_UI_HORIZONTAL_LAYOUT:"",
    STARK_UI_FLOW_LAYOUT:"",
    STARK_UI_GRID_LAYOUT:"",
    STARK_UI_RELATIVE_LAYOUT:"",
    STARK_UI_SCROLL_WINDOW:"",
    STARK_UI_SCROLL_WINDOW_VERTICAL:"",
    STARK_UI_SCROLL_WINDOW_HORIZONTAL:"",
    STARK_UI_NAVIGATION_BAR:"",
    STARK_UI_NAVIGATION_BAR_NAVIGATION_DRAWER:"",
    STARK_UI_NAVIGATION_BAR_NAVIGATION_DRAWER_CONTENT:"",
    STARK_UI_NAVIGATION_BAR_NAVIGATION_MENU:"",
    STARK_UI_NAVIGATION_BAR_NAVIGATION_MENU_CONTENT:"",
    STARK_UI_FOOTER_BAR:"",
    STARK_UI_ACTIVITY:""
}

const _s_cmp_ = StarkUI.Component,
    _r_cls_ = StarkUI.Class,
    _s_rnd_ = StarkUI.Render,
    _WINDOW_CLICK_EVENT_ = "_unbound_click_event_",
    _WINDOW_SCROLL_EVENT_ = "_unbound_scroll_event_",
    _CLOSE_DRAWERS_EVENT_="_close_drawers_event_";

const _linear_gradient_directions_ = {
    LEFT: "to left",
    RIGHT: "to right",
    BOTTOM: "to bottom",
    TOP: "to top",
    TOP_LEFT: "to top left",
    TOP_RIGHT: "to top right",
    BOTTOM_LEFT: "to bottom left",
    BOTTOM_RIGHT: "to bottom right"
}

function _initialize_classes_(){
    Object.keys(_classes_).map((key)=>{
        let replace=(string="",x="",y="")=>{
            let newString=string;
            while(true){
                if(newString.includes(x)){
                    newString=newString.replace(x,y);
                }else{
                    break
                }
            }
            return newString;
        }
        _classes_[key]="-"+replace(key,"_","-").toLowerCase()+"-";
    });
}

function _disable_animations_(){
    Object.keys(_animation_classes_).map((key)=>{
        _classes_[key]="_X_"
    });
}

function _enable_animations_(){
    _initialize_classes_();
}

function _linear_gradient_(direction = _linear_gradient_directions_.RIGHT, ...colors) {
    return "linear-gradient(" + direction + "," + colors.join(",") + ")"
}

function _radial_gradient_(...colors) {
    return "radial-gradient(" + colors.join(",") + ")"
}

function _delete_properties_(object = {}, properties = []) {
    let keys_ = Object.keys(object);
    for (let i = 0; i < properties.length; ++i) {
        if (!keys_.includes(properties[i])) {
            delete object[properties[i]]
        }
    }
    return true;
}

function _get_unique_id_() {
    let _s4_ = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return [_s4_(), _s4_(), _s4_(), _s4_(), _s4_()].join("-");
}

function _get_random_string_() {
    return _get_unique_id_();
}

function _is_null_(object_){
    return object_===null || object_===undefined || object_==="";
}

function _not_null_(object_){
    return !_is_null_(object_);
}

const _element_loader_={
    loadedIds:{},
    fromId(id=""){
        if(Object.keys(this.loadedIds).includes(id)){
            return this.loadedIds[id]
        }else{
            let element=document.getElementById(id);
            if(_not_null_(element)){
                this.loadedIds[id]=element;
                return this.loadedIds[id];
            }else{
                return null;
            }
        }
    }
}

function _get_window_dimensions_() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
    };
}

function _get_element_dimensions_(element) {
    return {
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        offsetWidth: element.offsetWidth,
        offsetHeight: element.offsetHeight,
        offsetTop: element.offsetTop,
        offsetLeft: element.offsetLeft
    };
}

function _replace_class_(element, previous_class, new_class) {
    if(_is_null_(element)){
        return
    }
    element.classList.replace(previous_class, new_class);
}

function _toggle_class_(element, classname) {
    if(_is_null_(element)){
        return
    }
    return element.classList.toggle(classname);
}

function _includes_class_(element,classname){
    if(_is_null_(element)){
        return
    }
    return element.classList.contains(classname);
}

function _add_class_(element,classname){
    if(_is_null_(element)){
        return
    }
    return element.classList.add(classname);
}

function _remove_class_(element,classname){
    if(_is_null_(element)){
        return
    }
    return element.classList.remove(classname);
}

function _toggle_classes_(element = document.body, first_class, second_class) {
    if(_is_null_(element)){
        return
    }
    if (element.classList.contains(first_class)) {
        element.classList.replace(first_class, second_class);
        return second_class;
    } else if (element.classList.contains(second_class)) {
        element.classList.replace(second_class, first_class);
        return first_class;
    }
}

function _toggle_visibility_(element) {
    if(_is_null_(element)){
        return
    }
    return element.classList.toggle(_classes_.STARK_UI_HIDDEN);
}

function _hide_element_(element) {
    if(_is_null_(element)){
        return
    }
    element.classList.add(_classes_.STARK_UI_HIDDEN)
}

function _show_element_(element) {
    if(_is_null_(element)){
        return
    }
    element.classList.remove(_classes_.STARK_UI_HIDDEN)
}

function _load_custom_props_(default_props = {}, props = {}) {
    return Object.assign(default_props, props);
}

function _load_custom_class_(props = {}, class_name = "") {
    if (props.className) {
        props.className = props.className + " " + class_name
    } else {
        props.className = class_name;
    }
    return Object.assign({}, props);
}

function _load_custom_style_(props = {}, style = {}) {
    if (props.style) {
        props.style = Object.assign(props.style, style);
    } else {
        props.style = style;
    }
    return Object.assign({}, props);
}

function _label_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_LABEL);
    return _s_cmp_("span", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _paragraph_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_PARAGRAPH);
    return _s_cmp_("p", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _icon_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_ICON);
    return _s_cmp_("i", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _heading_1_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HEADING);
    return _s_cmp_("h1", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _heading_2_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HEADING);
    return _s_cmp_("h2", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _heading_3_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HEADING);
    return _s_cmp_("h3", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _heading_4_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HEADING);
    return _s_cmp_("h4", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _heading_5_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HEADING);
    return _s_cmp_("h5", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _heading_6_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HEADING);
    return _s_cmp_("h6", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _button_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_BUTTON);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _link_(props = {}) {
    let properties = _load_custom_props_({
        href: "#"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_LINK);
    return _s_cmp_("a", Object.assign(properties, { key: _get_random_string_() }), properties.component || properties.text);
}

function _text_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "text"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TEXT_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _file_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "file"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_FILE_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _password_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "password"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_PASSWORD_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _number_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "number"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_NUMBER_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _color_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "color"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_COLOR_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _date_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "date"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_DATE_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _datetime_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "datetime"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_DATETIME_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _month_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "month"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_MONTH_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _week_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "week"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_WEEK_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _time_input_(props = {}) {
    let properties = _load_custom_props_({
        type: "time"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TIME_INPUT);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _text_area_(props = {}) {
    let properties = _load_custom_props_({}, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TEXT_AREA);
    return _s_cmp_("textarea", Object.assign(properties, { key: _get_random_string_() }));
}

function _switch_(props = {}) {
    let properties = _load_custom_props_({
        onSwitched: () => { },
        id: _get_random_string_()
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_SWITCH);
    let toggle_id = _get_random_string_(),
        get_toggle_element=()=>{
            return _element_loader_.fromId(toggle_id);
        },
        get_switch_element=()=>{
            return _element_loader_.fromId(properties.id);
        },
        toggle_switch = (event) => {
            let toggle = get_toggle_element(),
                switch_ = get_switch_element(),
                current_class = _toggle_classes_(toggle, _classes_.STARK_UI_SWITCH_TOGGLE_ACTIVE, _classes_.STARK_UI_SWITCH_TOGGLE_INACTIVE),
                active = !current_class.includes("inactive");
            if (active) {
                _replace_class_(switch_, _classes_.STARK_UI_SWITCH, _classes_.STARK_UI_SWITCH_ACTIVE);
            } else {
                _replace_class_(switch_, _classes_.STARK_UI_SWITCH_ACTIVE, _classes_.STARK_UI_SWITCH);
            }
            properties.onSwitched(active);
        }
    return _s_cmp_("div", Object.assign(properties, {
        key: _get_random_string_(),
        onClick: (event) => {
            toggle_switch(event);
        }
    }), _s_cmp_("div", {
        className: _classes_.STARK_UI_SWITCH_TOGGLE_INACTIVE,
        id: toggle_id
    }, null));
}

function _image_view_(props = {}) {
    let properties = _load_custom_props_({
        src: "#"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_IMAGE_VIEW);
    return _s_cmp_("img", Object.assign(properties, { key: _get_random_string_() }));
}

function _video_view_(props = {}) {
    let properties = _load_custom_props_({
        controls: true
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_VIDEO_VIEW);
    return _s_cmp_("video", Object.assign(properties, { key: _get_random_string_() }));
}

function _audio_view_(props = {}) {
    let properties = _load_custom_props_({
        controls: true
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_AUDIO_VIEW);
    return _s_cmp_("audio", Object.assign(properties, { key: _get_random_string_() }));
}

function _progress_bar_(props = {}) {
    let properties = _load_custom_props_({}, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_PROGRESS_BAR);
    return _s_cmp_("progress", Object.assign(properties, { key: _get_random_string_() }));
}

function _progress_indicator_(props = {}) {
    let properties = _load_custom_props_({}, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_PROGRESS_INDICATOR);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }));
}

function _selection_view_(props = {}) {
    let properties = _load_custom_props_({
        optionItems: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_SELECTION_VIEW);
    return _s_cmp_("select", Object.assign(properties, { key: _get_random_string_() }), ...properties.optionItems);
}

function _option_item_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_OPTION_ITEM);
    return _s_cmp_("option", Object.assign(properties, { key: _get_random_string_() }), properties.text);
}

function _slider_(props = {}) {
    let properties = _load_custom_props_({
        type: "range"
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_SLIDER);
    return _s_cmp_("input", Object.assign(properties, { key: _get_random_string_() }));
}

function _check_button_(props = {}) {
    let properties = _load_custom_props_({
        type: "checkbox",
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_CHECK_BUTTON_CHECK_BOX);
    return _s_cmp_("div", {
            className: _classes_.STARK_UI_CHECK_BUTTON,
            key: _get_random_string_(),
            style: properties.style
        },
        _s_cmp_("input", { ...properties, style: {} }),
        _s_cmp_("span", {}, properties.text));
}

function _radio_button_(props = {}) {
    let properties = _load_custom_props_({
        type: "radio",
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_RADIO_BUTTON_CHECK_BOX);
    return _s_cmp_("div", {
            className: _classes_.STARK_UI_RADIO_BUTTON,
            key: _get_random_string_(),
            style: properties.style
        },
        _s_cmp_("input", { ...properties, style: {} }),
        _s_cmp_("span", {}, properties.text));
}

function _radio_group_(props = {}) {
    let properties = _load_custom_props_({
        radioButtons: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_RADIO_GROUP);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.radioButtons.map((button) => {
        return _radio_button_(button);
    }));
}

function _menu_item_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_MENU_ITEM);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), properties.component || properties.text);
}

function _menu_(props = {}) {
    let properties = _load_custom_props_({
        menuItems: [],
        text: "",
        id: _get_random_string_(),
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_MENU);
    let dropdown_id = _get_random_string_(),
        get_menu_element=()=>{
            return _element_loader_.fromId(properties.id);
        },
        get_dropdown_element=()=>{
            return _element_loader_.fromId(dropdown_id);
        },
        on_clicked = (event) => {
            let menu = get_menu_element(),
                dropdown = get_dropdown_element(),
                hidden = _toggle_visibility_(dropdown);
            if (hidden === true) {
                _replace_class_(menu, _classes_.STARK_UI_MENU_ACTIVE, _classes_.STARK_UI_MENU);
            } else {
                _replace_class_(menu, _classes_.STARK_UI_MENU, _classes_.STARK_UI_MENU_ACTIVE);
            }
        },
        close_menu = (event) => {
            let menu = get_menu_element(),
                dropdown = get_dropdown_element();
            _hide_element_(dropdown);
            _replace_class_(menu, _classes_.STARK_UI_MENU_ACTIVE, _classes_.STARK_UI_MENU);
        },
        dropdown_content = properties.menuComponent ? [properties.menuComponent] : properties.menuItems;
    window.addEventListener(_WINDOW_CLICK_EVENT_, (event) => {
        close_menu(event);
    });
    window.addEventListener(_WINDOW_SCROLL_EVENT_, (event) => {
        close_menu(event);
    });
    return _s_cmp_("div", Object.assign(properties, {
            key: _get_random_string_(),
            onClick: (event) => {
                event.stopPropagation();
                on_clicked(event);
            }
        }),
        properties.component || properties.text,
        _s_cmp_("div", {
            className: [_classes_.STARK_UI_MENU_DROPDOWN,_classes_.STARK_UI_HIDDEN].join(" "),
            id: dropdown_id
        }, ...dropdown_content));
}

function _menu_bar_(props = {}) {
    let properties = _load_custom_props_({
        menus: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_MENU_BAR);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.menus);
}

function _tabbed_window_(props = {}) {
    let properties = _load_custom_props_({
        tabs: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABBED_WINDOW);
    let title_bar_id = _get_random_string_(),
        content_area_id = _get_random_string_(),
        get_title_bar_element=()=>{
            return _element_loader_.fromId(title_bar_id);
        },
        get_content_area_element=()=>{
            return _element_loader_.fromId(content_area_id);
        },
        set_tab_index = (event, index) => {
            let title_bar = get_title_bar_element(),
                content_area = get_content_area_element();
            for (let x = 0; x < title_bar.childElementCount; ++x) {
                let child = title_bar.children.item(x);
                if (index === x) {
                    _replace_class_(child, _classes_.STARK_UI_TAB_INACTIVE, _classes_.STARK_UI_TAB_ACTIVE);
                } else {
                    _replace_class_(child, _classes_.STARK_UI_TAB_ACTIVE, _classes_.STARK_UI_TAB_INACTIVE);
                }
            }
            for (let x = 0; x < content_area.childElementCount; ++x) {
                let child = content_area.children.item(x);
                if (index === x) {
                    _show_element_(child);
                } else {
                    _hide_element_(child);
                }
            }
        }
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }),
        _s_cmp_("div", {
            className: _classes_.STARK_UI_TABBED_WINDOW_TITLE_BAR,
            id: title_bar_id
        }, ...properties.tabs.map((tab, index) => {
            return _s_cmp_("div", {
                className: index === 0 ? _classes_.STARK_UI_TAB_ACTIVE : _classes_.STARK_UI_TAB_INACTIVE,
                onClick: (event) => {
                    set_tab_index(event, index)
                }
            }, tab.title);
        })),
        _s_cmp_("div", {
            className: _classes_.STARK_UI_TABBED_WINDOW_CONTENT_AREA,
            id: content_area_id
        }, ...properties.tabs.map((tab, index) => {
            return _s_cmp_("div", {
                className: index === 0 ? "" : _classes_.STARK_UI_HIDDEN,
            }, tab.component);
        })));
}

function _tabbed_view_(props = {}) {
    let properties = _load_custom_props_({
        tabs: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABBED_VIEW);
    let title_bar_id = _get_random_string_(),
        content_area_id = _get_random_string_(),
        get_title_bar_element=()=>{
            return _element_loader_.fromId(title_bar_id);
        },
        get_content_area_element=()=>{
            return _element_loader_.fromId(content_area_id);
        },
        set_tab_index = (event, index) => {
            let title_bar = get_title_bar_element(),
                content_area = get_content_area_element();
            for (let x = 0; x < title_bar.childElementCount; ++x) {
                let child = title_bar.children.item(x);
                if (index === x) {
                    _replace_class_(child, _classes_.STARK_UI_TAB_INACTIVE, _classes_.STARK_UI_TAB_ACTIVE);
                } else {
                    _replace_class_(child, _classes_.STARK_UI_TAB_ACTIVE, _classes_.STARK_UI_TAB_INACTIVE);
                }
            }
            for (let x = 0; x < content_area.childElementCount; ++x) {
                let child = content_area.children.item(x);
                if (index === x) {
                    _show_element_(child);
                } else {
                    _hide_element_(child);
                }
            }
        }
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }),
        _s_cmp_("div", {
            className: _classes_.STARK_UI_TABBED_VIEW_HEADER,
        }, _s_cmp_("div", {
            className: _classes_.STARK_UI_TABBED_VIEW_TITLE_BAR,
            id: title_bar_id
        }, ...properties.tabs.map((tab, index) => {
            return _s_cmp_("div", {
                className: index === 0 ? _classes_.STARK_UI_TAB_ACTIVE : _classes_.STARK_UI_TAB_INACTIVE,
                style: {
                    borderLeft: index === 0 ? "1px solid transparent" : "1px solid lightgray"
                },
                onClick: (event) => {
                    set_tab_index(event, index)
                }
            }, tab.title);
        }))),
        _s_cmp_("div", {
            className: _classes_.STARK_UI_TABBED_VIEW_CONTENT_AREA,
            id: content_area_id
        }, ...properties.tabs.map((tab, index) => {
            return _s_cmp_("div", {
                className: index === 0 ? "" : _classes_.STARK_UI_HIDDEN,
            }, tab.component);
        })));
}

function _canvas_(props = {}) {
    let properties = _load_custom_props_({}, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_CANVAS);
    return _s_cmp_("canvas", Object.assign(properties, { key: _get_random_string_() }));
}

function _ordered_list_(props = {}) {
    let properties = _load_custom_props_({
        listItems: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_ORDERED_LIST);
    return _s_cmp_("ol", Object.assign(properties, { key: _get_random_string_() }), ...properties.listItems);
}

function _unordered_list_(props = {}) {
    let properties = _load_custom_props_({
        listItems: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_UNORDERED_LIST);
    return _s_cmp_("ul", Object.assign(properties, { key: _get_random_string_() }), ...properties.listItems);
}

function _list_item_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_LIST_ITEM);
    return _s_cmp_("li", Object.assign(properties, { key: _get_random_string_() }), properties.component || properties.text);
}

function _table_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE);
    return _s_cmp_("table", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _table_heading_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE_HEADING);
    return _s_cmp_("thead", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _table_footer_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE_FOOTER);
    return _s_cmp_("tfoot", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _table_body_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE_BODY);
    return _s_cmp_("tbody", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _table_row_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE_ROW);
    return _s_cmp_("tr", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _table_header_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE_HEADER);
    return _s_cmp_("th", Object.assign(properties, { key: _get_random_string_() }), properties.component || properties.text);
}

function _table_data_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_TABLE_DATA);
    return _s_cmp_("td", Object.assign(properties, { key: _get_random_string_() }), properties.component || properties.text);
}

function _caption_(props = {}) {
    let properties = _load_custom_props_({
        text: ""
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_CAPTION);
    return _s_cmp_("caption", Object.assign(properties, { key: _get_random_string_() }), properties.component || properties.text);
}

function _embed_(props = {}) {
    let properties = _load_custom_props_({}, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_EMBED);
    return _s_cmp_("embed", Object.assign(properties, { key: _get_random_string_() }));
}

function _iframe_(props = {}) {
    let properties = _load_custom_props_({}, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_IFRAME);
    return _s_cmp_("iframe", Object.assign(properties, { key: _get_random_string_() }));
}

function _layout_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_LAYOUT);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _vertical_layout_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_VERTICAL_LAYOUT);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _horizontal_layout_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_HORIZONTAL_LAYOUT);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _relative_layout_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_RELATIVE_LAYOUT);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _grid_layout_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_GRID_LAYOUT);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _flow_layout_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_FLOW_LAYOUT);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _scroll_window_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_SCROLL_WINDOW);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _horizontal_scroll_window_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_SCROLL_WINDOW_HORIZONTAL);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _vertical_scroll_window_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_SCROLL_WINDOW_VERTICAL);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _collapse_view_(props = {}) {
    let properties = _load_custom_props_({
        title:"",
        component: null
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_COLLAPSE_VIEW);
    let dropdown_id = _get_random_string_(),
        get_dropdown_element=()=>{
            return _element_loader_.fromId(dropdown_id);
        },
        toggle_component = (event) => {
            let dropdown = get_dropdown_element(),
                hidden = _toggle_visibility_(dropdown);
        }
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }),
        _s_cmp_("div", {
            className: _classes_.STARK_UI_COLLAPSE_VIEW_TITLE_BAR,
            onClick: (event) => {
                toggle_component(event);
            }
        }, properties.title),
        _s_cmp_("div", {
            className: [_classes_.STARK_UI_COLLAPSE_VIEW_DROPDOWN,_classes_.STARK_UI_HIDDEN].join(" "),
            id: dropdown_id
        }, properties.component));
}

function _navigation_bar_(props = {}) {
    let properties = _load_custom_props_({
        navigationDrawer: null,
        menuDrawer: null,
        drawerButton: null,
        menuButton: null,
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_NAVIGATION_BAR);
    let drawer_id = _get_random_string_(),
        drawer_content_id=_get_random_string_(),
        menu_id = _get_random_string_(),
        menu_content_id=_get_random_string_(),
        get_drawer_element = () => {
            return _element_loader_.fromId(drawer_id);
        },
        get_drawer_content_element = () => {
            return _element_loader_.fromId(drawer_content_id);
        },
        get_menu_element = () => {
            return _element_loader_.fromId(menu_id);
        },
        get_menu_content_element = () => {
            return _element_loader_.fromId(menu_content_id);
        },
        open_menu = (event) => {
            let menu = get_menu_element(),
                content=get_menu_content_element();
            _show_element_(menu);
            _add_class_(content,_classes_.STARK_UI_SLIDE_IN_RIGHT_FAST)
        },
        open_drawer = (event) => {
            let drawer = get_drawer_element(),
                content=get_drawer_content_element();
            _show_element_(drawer);
            _add_class_(content,_classes_.STARK_UI_SLIDE_IN_LEFT_FAST);
        },
        close_menu = (event) => {
            let menu = get_menu_element(),
                content=get_menu_content_element();
            _remove_class_(content,_classes_.STARK_UI_SLIDE_IN_RIGHT_FAST)
            _hide_element_(menu);
        },
        close_drawer = (event) => {
            let drawer = get_drawer_element(),
                content=get_drawer_content_element();
            _remove_class_(content,_classes_.STARK_UI_SLIDE_IN_LEFT_FAST)
            _hide_element_(drawer);
        },
        toggle_drawer = (event) => {
            let drawer = get_drawer_element();
            if(_includes_class_(drawer,_classes_.STARK_UI_HIDDEN)){
                open_drawer(event);
            }else{
                close_drawer(event);
            }
        },
        toggle_menu = (event) => {
            let menu = get_menu_element();
            if(_includes_class_(menu,_classes_.STARK_UI_HIDDEN)){
                open_menu(event);
            }else{
                close_menu(event);
            }
        };
    let drawer = properties.navigationDrawer === null ? null : _s_cmp_("div", {
            className: [_classes_.STARK_UI_NAVIGATION_BAR_NAVIGATION_DRAWER,_classes_.STARK_UI_HIDDEN].join(" "),
            id: drawer_id,
            onClick: (event) => {
                event.stopPropagation();
                close_drawer(event);
                close_menu(event);
            }
        }, _s_cmp_("div", {
            className: _classes_.STARK_UI_NAVIGATION_BAR_NAVIGATION_DRAWER_CONTENT,
            id:drawer_content_id,
            onClick: (event) => {
                event.stopPropagation();
            }
        }, properties.navigationDrawer)),
        menu = properties.menuDrawer === null ? null : _s_cmp_("div", {
            className: [_classes_.STARK_UI_NAVIGATION_BAR_NAVIGATION_MENU,_classes_.STARK_UI_HIDDEN].join(" "),
            id: menu_id,
            onClick: (event) => {
                event.stopPropagation();
                close_drawer(event);
                close_menu(event);
            }
        }, _s_cmp_("div", {
            className: _classes_.STARK_UI_NAVIGATION_BAR_NAVIGATION_MENU_CONTENT,
            id:menu_content_id,
            onClick: (event) => {
                event.stopPropagation();
            }
        }, properties.menuDrawer)),
        drawer_button = properties.navigationDrawer === null ? null : properties.drawerButton !== null ? _s_cmp_("div", {
            onClick: (event) => {
                event.stopPropagation();
                toggle_drawer(event);
                close_menu(event);
            }
        }, properties.drawerButton) : _button_({
            text: "| | |",
            style: _button_styles_.L,
            onClick: (event) => {
                event.stopPropagation();
                toggle_drawer(event);
                close_menu(event);
            }
        }),
        menu_button = properties.menuDrawer === null ? null : properties.menuButton !== null ? _s_cmp_("div", {
            onClick: (event) => {
                event.stopPropagation();
                toggle_menu(event);
                close_drawer(event);
            }
        }, properties.menuButton) : _button_({
            text: "| | |",
            style: _button_styles_.L,
            onClick: (event) => {
                event.stopPropagation();
                toggle_menu(event);
                close_drawer(event);
            }
        });
    window.addEventListener(_CLOSE_DRAWERS_EVENT_, (event) => {
        close_menu(event);
        close_drawer(event);
    });
    window.addEventListener(_WINDOW_CLICK_EVENT_, (event) => {
        close_menu(event);
        close_drawer(event);
    });
    window.addEventListener(_WINDOW_SCROLL_EVENT_, (event) => {
        close_menu(event);
        close_drawer(event);
    });
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), drawer_button, ...properties.components, menu_button, menu, drawer);
}

function _footer_bar_(props = {}) {
    let properties = _load_custom_props_({
        components: []
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_FOOTER_BAR);
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), ...properties.components);
}

function _activity_(props = {}) {
    let properties = _load_custom_props_({
        mainComponent: null,
        navigationBar: null,
        footerBar: null
    }, props);
    properties = _load_custom_class_(properties, _classes_.STARK_UI_ACTIVITY);
    properties = _load_custom_style_(properties, {
        paddingTop: properties.navigationBar === null ? "0px" : "60px",
        paddingBottom: properties.footerBar === null ? "0px" : "60px"
    });
    return _s_cmp_("div", Object.assign(properties, { key: _get_random_string_() }), properties.mainComponent, properties.footerBar, properties.navigationBar);
}

function _application_(props = {}) {
    return {
        activityMap: props.activityMap || {},
        baseElement: props.baseElement || document.body,
        currentActivity: null,
        openActivity(title) {
            let activity = this.activityMap[title] || null;
        },
        showActivity(activity, title) {
            this.activityMap[title] = activity;
            this.currentActivity = {
                title: title,
                activity: activity
            };
            window.location.hash = title;
            _s_rnd_(activity, this.baseElement);
        },
        render() {
            this.baseElement.textContent = "";
            if (this.currentActivity != null) {
                _s_rnd_(this.currentActivity, this.baseElement);
            }
        }
    }
}

function _store_(initial_state = {}, reducer = (_s_, _a_) => _s_) {
    return {
        _state_: Object.assign({}, initial_state),
        _reducer_: reducer,
        _state_changed_listeners_: [],
        _set_state_(_state_) {
            this._state_ = _state_;
            this._state_changed_listeners_.map((_listener_) => {
                _listener_(this);
            });
        },
        setReducer(_reducer_) {
            this._reducer_ = _reducer_;
        },
        setState(_state_) {
            let _new_state_ = Object.assign(this._state_, _state_);
            this._set_state_(_new_state_);
        },
        getState() {
            return this._state_;
        },
        subscribe(_listener_) {
            this._state_changed_listeners_.push(_listener_);
        },
        unsubscribe(_listener_) {
            this._state_changed_listeners_ = this._state_changed_listeners_.filter((__listener__) => {
                return __listener__ !== _listener_;
            });
        },
        addOnStateChangedListener(_listener_) {
            this.subscribe(_listener_);
        },
        removeOnStateChangedListener(_listener_) {
            this.subscribe(_listener_);
        },
        dispatchAction(_action_) {
            let _new_state_ = this._reducer_(this.getState(), _action_);
            this._set_state_(_new_state_);
        }
    };
}

function _show_dialog_(props = {}) {
    let properties = _load_custom_props_({
        component: null,
        icon: "",
        title: "Dialog",
        splash: false,
        animate:true
    }, props);
    let base_element = document.createElement("div"),
        dialog_id = _get_random_string_(),
        close_dialog = (event) => {
            _close_dialog_(dialog_id);
        };
    let component = _s_cmp_("div", {
        className: _classes_.STARK_UI_DIALOG_WINDOW,
        onClick: (event) => {
            event.stopPropagation();
            close_dialog(event);
        },
    }, _s_cmp_("div", {
            className: [_classes_.STARK_UI_DIALOG,properties.animate===true?_classes_.STARK_UI_SLIDE_IN_BOTTOM_FAST:""].join(" "),
            onClick: (event) => {
                event.stopPropagation();
            },
            style: {
                backgroundColor: "white"
            }
        }, properties.splash === true ? null : _s_cmp_("div", {
            className: _classes_.STARK_UI_DIALOG_TITLE_BAR
        }, properties.icon, properties.title, _button_({
            style: {
                borderRadius: "100%",
                width: "15px",
                height: "15px",
                fontStyle: "normal",
                marginRight: "5px",
                padding:"3px"
            },
            text: "x",
            onClick: (event) => {
                event.stopPropagation();
                close_dialog(event);
            },
        })),
        _s_cmp_("div", {}, properties.component)));
    base_element.setAttribute("stark-ui-dialog-id", dialog_id);
    document.body.appendChild(base_element);
    _s_rnd_(component, base_element);
    return dialog_id;
}

function _close_dialog_(dialog_id) {
    let element = document.querySelector("[stark-ui-dialog-id='" + dialog_id + "']");
    if (element != null) {
        document.body.removeChild(element);
    }
}

function _show_confirm_dialog_(props = {}) {
    let properties = _load_custom_props_({
            message: "Message",
            onCancel: () => { },
            onConfirm: () => { }
        }, props),
        dialogId=null;
    let component = _vertical_layout_({
        components: [
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"
                },
                components: [
                    _label_({
                        text: properties.message
                    })
                ]
            }),
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "5px",
                    borderTop: "1px solid lightgray",
                    fontWeight:"bold"
                },
                components: [
                    _button_({
                        text: "Cancel",
                        style:{
                            width:"100px"
                        },
                        onClick: (event) => {
                            properties.onCancel(event);
                            _close_dialog_(dialogId);
                        }
                    }),
                    _button_({
                        text: "Confirm",
                        style:{
                            width:"100px"
                        },
                        onClick: (event) => {
                            properties.onConfirm(event);
                            _close_dialog_(dialogId);
                        }
                    })
                ]
            }),
        ]
    });
    dialogId= _show_dialog_({
        ...properties,
        component: component
    });
}

function _show_input_dialog_(props = {}) {
    let properties = _load_custom_props_({
            prompt: "Input",
            placeholder: "",
            onCancel: () => { },
            onConfirm: () => { }
        }, props),
        dialogId=null;
    let input_id = _get_random_string_();
    let component = _vertical_layout_({
        components: [
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"
                },
                components: [
                    _label_({
                        text: properties.prompt
                    })
                ]
            }),
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "10px"
                },
                components: [
                    _text_input_({
                        id: input_id,
                        placeholder: properties.placeholder
                    })
                ]
            }),
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "5px",
                    borderTop: "1px solid lightgray",
                    fontWeight:"bold"
                },
                components: [
                    _button_({
                        text: "Cancel",
                        style:{
                            width:"100px"
                        },
                        onClick: (event) => {
                            properties.onCancel(event);
                            _close_dialog_(dialogId);
                        }
                    }),
                    _button_({
                        text: "Confirm",
                        style:{
                            width:"100px"
                        },
                        onClick: (event) => {
                            let value = document.getElementById(input_id).value;
                            properties.onConfirm(value);
                            _close_dialog_(dialogId);
                        }
                    })
                ]
            }),
        ]
    });
    dialogId= _show_dialog_({
        ...properties,
        component: component
    });
}

function _show_message_dialog_(props = {}) {
    let properties = _load_custom_props_({
            message: "Message",
            onClose: () => { },
        }, props),
        dialogId=null;
    let component = _vertical_layout_({
        components: [
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"
                },
                components: [
                    _label_({
                        text: properties.message
                    })
                ]
            }),
            _horizontal_layout_({
                style: {
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "5px",
                    borderTop: "1px solid lightgray",
                    fontWeight:"bold"
                },
                components: [
                    _button_({
                        text: "Close",
                        style:{
                            width:"100px"
                        },
                        onClick: (event) => {
                            properties.onClose(event);
                            _close_dialog_(dialogId);
                        }
                    })
                ]
            }),
        ]
    });
    dialogId= _show_dialog_({
        ...properties,
        component: component
    });
}

function _show_toast_(text, duration = 2500) {
    let base_element = document.createElement("div"),
        toast_id = _get_random_string_();
    base_element.setAttribute("stark-ui-toast-id", toast_id);
    base_element.classList.add("-stark-ui-toast-");
    base_element.textContent = text;
    document.body.appendChild(base_element);
    setTimeout(() => {
        _hide_toast_(toast_id);
    }, duration);
    return toast_id;
}

function _hide_toast_(toast_id) {
    let element = document.querySelector("[stark-ui-toast-id='" + toast_id + "']");
    if (element != null) {
        document.body.removeChild(element);
    }
}

function _show_tooltip_(component, position = {}) {
    let base_element = document.createElement("div"),
        tooltip_id = _get_random_string_();
    base_element.setAttribute("stark-ui-tooltip-id", tooltip_id);
    base_element.classList.add("-stark-ui-toast-");
    document.body.appendChild(base_element);
    Object.assign(base_element.style, position)
    _s_rnd_(component, base_element);
    return tooltip_id;
}

function _hide_tooltip_(tooltip_id) {
    let element = document.querySelector("[stark-ui-tooltip-id='" + tooltip_id + "']");
    if (element != null) {
        document.body.removeChild(element);
    }
}

function _clear_tooltips_() {
    document.querySelectorAll("[stark-ui-tooltip-id]").forEach((tooltip_) => {
        tooltip_.parentNode.removeChild(tooltip_);
    })
}

function _clear_toasts_() {
    document.querySelectorAll("[stark-ui-toast-id]").forEach((menu_) => {
        menu_.parentNode.removeChild(menu_);
    })
}

function _clear_dialogs_() {
    document.querySelectorAll("[stark-ui-dialog-id]").forEach((dialog_) => {
        dialog_.parentNode.removeChild(dialog_);
    })
}

function _close_drawers_(){
    window.dispatchEvent(new CustomEvent(_CLOSE_DRAWERS_EVENT_, {}));
}

function _initialize_() {
    _initialize_classes_();
    window.addEventListener("click", (event_) => {
        window.dispatchEvent(new CustomEvent(_WINDOW_CLICK_EVENT_, {
            event: event_
        }));
    });
    window.addEventListener("scroll", (event_) => {
        window.dispatchEvent(new CustomEvent(_WINDOW_SCROLL_EVENT_, {
            event: event_
        }));
    });
    window.addEventListener(_WINDOW_CLICK_EVENT_, () => {
        _clear_tooltips_();
    });
    window.addEventListener(_WINDOW_SCROLL_EVENT_, () => {
        _clear_tooltips_();
    });
}

const StarkUIComponents = {
    Initialize: _initialize_,
    DisableAnimations:_disable_animations_,
    EnableAnimations:_enable_animations_,
    Label: _label_,
    Paragraph: _paragraph_,
    Icon: _icon_,
    Heading1: _heading_1_,
    Heading2: _heading_2_,
    Heading3: _heading_3_,
    Heading4: _heading_4_,
    Heading5: _heading_5_,
    Heading6: _heading_6_,
    Button: _button_,
    Link: _link_,
    TextInput: _text_input_,
    FileInput: _file_input_,
    PasswordInput: _password_input_,
    NumberInput: _number_input_,
    ColorInput: _color_input_,
    DateInput: _date_input_,
    DatetimeInput: _datetime_input_,
    MonthInput: _month_input_,
    WeekInput: _week_input_,
    TimeInput: _time_input_,
    TextArea: _text_area_,
    Switch: _switch_,
    ImageView: _image_view_,
    VideoView: _video_view_,
    AudioView: _audio_view_,
    ProgressBar: _progress_bar_,
    ProgressIndicator: _progress_indicator_,
    SelectionView: _selection_view_,
    OptionItem: _option_item_,
    Slider: _slider_,
    CheckButton: _check_button_,
    RadioButton: _radio_button_,
    RadioGroup: _radio_group_,
    MenuItem: _menu_item_,
    Menu: _menu_,
    MenuBar: _menu_bar_,
    TabbedWindow: _tabbed_window_,
    TabbedView: _tabbed_view_,
    Canvas: _canvas_,
    OrderedList: _ordered_list_,
    UnorderedList: _unordered_list_,
    ListItem: _list_item_,
    Table: _table_,
    TableHeading: _table_heading_,
    TableFooter: _table_footer_,
    TableBody: _table_body_,
    TableRow: _table_row_,
    TableHeader: _table_header_,
    TableData: _table_data_,
    Caption: _caption_,
    Embed: _embed_,
    Iframe: _iframe_,
    Layout: _layout_,
    VerticalLayout: _vertical_layout_,
    HorizontalLayout: _horizontal_layout_,
    RelativeLayout: _relative_layout_,
    GridLayout: _grid_layout_,
    FlowLayout: _flow_layout_,
    ScrollWindow: _scroll_window_,
    HorizontalScrollWindow: _horizontal_scroll_window_,
    VerticalScrollWindow: _vertical_scroll_window_,
    CollapseView: _collapse_view_,
    NavigationBar: _navigation_bar_,
    FooterBar: _footer_bar_,
    Activity: _activity_,
    Application: _application_,
    Store: _store_,
    ShowDialog: _show_dialog_,
    CloseDialog: _close_dialog_,
    ShowConfirmDialog: _show_confirm_dialog_,
    ShowInputDialog: _show_input_dialog_,
    ShowMessageDialog: _show_message_dialog_,
    ShowToast: _show_toast_,
    HideToast: _hide_toast_,
    ShowTooltip: _show_tooltip_,
    HideTooltip: _hide_tooltip_,
    ClearTooltips: _clear_tooltips_,
    ClearToasts: _clear_toasts_,
    ClearDialogs: _clear_dialogs_,
    CloseDrawers:_close_drawers_,
    LinearGradient: _linear_gradient_,
    RadialGradient: _radial_gradient_,
    LinearGradientDirections: _linear_gradient_directions_,
    CustomColors: _custom_colors_,
    Events: _events_,
    IconStyles: _icon_styles_,
    ImageStyles: _image_styles_,
    ButtonStyles: _button_styles_,
    CreateClass: _r_cls_,
    CreateElement: _s_cmp_,
    Render: _s_rnd_,
    Classes:_classes_
}
