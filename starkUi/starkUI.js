let _evs_ = {
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
    _sui_evs_s_ = [];

Object.keys(_evs_).forEach((key_) => {
    let event_ = key_.toLowerCase().replace("_", "");
    _evs_[key_] = event_;
    _sui_evs_s_.push("on" + event_);
});

function _assert_non_null_(object_) {
    if (object_ == null) {
        throw new Error("Null object error!");
    }
}

function _assert_property_(object_, property_ = "") {
    if (Object.keys(object_).includes(property_) !== true) {
        throw new Error("Missing property : " + property_);
    }
}

function _assert_properties_(object_ = {}, properties_ = []) {
    for (let i = 0; i < properties_.length; ++i) {
        _assert_property_(object_, properties_[i])
    }
}

function _delete_properties_(object_ = {}, properties_ = []) {
    let keys_ = Object.keys(object_);
    for (let i = 0; i < properties_.length; ++i) {
        if (!keys_.includes(properties_[i])) {
            delete object_[properties_[i]]
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

function _get_element_by_attribute_(_attribute_, _value_) {
    let query_ = "[" + _attribute_ + "='" + _value_ + "']";
    return document.querySelector(query_);
}

function _get_elements_with_attribute_(_attribute_) {
    let query_ = "[" + _attribute_ + "]";
    return document.querySelectorAll(query_);
}

let _stark_ui_components_ = {
    components_: {},
    _add_component_(_key_, _component_) {
        this.components_[_key_] = _component_
    },
    _get_component_(_key_) {
        if (this._has_(_key_)) {
            return this.components_[_key_];
        }
        return null;
    },
    _delete_component_(_key_) {
        delete this.components_[_key_];
    },
    _has_(_key_) {
        return Object.keys(this.components_).includes(_key_);
    }
}

let _stark_ui_instances_ = {
    instances_: {},
    _add_instance_(_key_, _instance_) {
        this.instances_[_key_] = _instance_
    },
    _get_instance_(_key_) {
        if (this._has_(_key_)) {
            return this.instances_[_key_];
        }
        return null;
    },
    _delete_instance_(_key_) {
        delete this.instances_[_key_];
    },
    _has_(_key_) {
        return Object.keys(this.instances_).includes(_key_);
    }
}

function _is_component_(item_) {
    return item_._is_stark_ui_component_ === true;
}

function _is_class_(item_) {
    return item_._is_stark_ui_component_class_ === true;
}

function _is_class_instance_(item_) {
    return item_._is_stark_ui_component_class_instance_ === true;
}

function _is_wrapped_component_(item_) {
    return item_._is_wrapped_component_ === true;
}

function _is_instance_reference_(item_) {
    return item_._is_instance_reference_ === true;
}

function _is_string_(item_) {
    return typeof item_ === typeof "string";
}

function _is_number_(item_) {
    return typeof item_ === typeof 1000;
}

function _is_boolean_(item_) {
    return item_ === true || item_ === false;
}

function _is_svg_(tag_) {
    return [
        "svg", "path", "line", "rect", "circle", "polygon"
    ].includes(tag_);
}

function _is_valid_attribute_(name_) {
    return ["id", "class", "src", "controls", "href", "url",
        "accept-charset", "accept", "action", "align"
    ].includes(name_);
}

function _default_class_properties_(properties_) {
    return Object.assign({
        defaultProps() {
            return {}
        },
        defaultState() {
            return {}
        },
        mounting() {},
        unmounting() {},
        mounted() {},
        unmounted() {},
        updated() {},
        update() {
            return true;
        }
    }, properties_);
}

function _create_element_(tag_ = "div", props_ = {}) {
    let element_ = _is_svg_(tag_) === true ?
        document.createElementNS("http://www.w3.org/1999/xhtml", tag_) : document.createElement(tag_);
    if (props_) {
        if (props_.style) {
            Object.assign(element_.style, props_.style);
            delete props_["style"];
        }
        Object.keys(props_).map((key_) => {
            if (_sui_evs_s_.includes(key_.toLocaleLowerCase())) {
                element_.addEventListener(key_.toLocaleLowerCase().substring(2), props_[key_]);
            } else if (key_ === "className") {
                element_.className = props_[key_];
            } else if (key_ === "textContent") {
                element_.textContent = props_[key_];
            } else {
                if (_is_string_(props_[key_]) || _is_number_(props_[key_]) || _is_boolean_(props_[key_])) {
                    element_.setAttribute(key_, props_[key_]);
                }
            }
        });
    }
    return element_;
}

function _update_component_by_key_(key_, update_) {
    let _element_ = document.querySelector("[stark_ui_component_key='" + key_ + "']"),
        _previous_component_ = _stark_ui_components_._get_component_(key_);
    if (_element_ != null) {
        if (_previous_component_._update_() === true) {
            let _parent_element_ = _element_.parentElement,
                _temp_element_ = document.createElement("span");
            _previous_component_._unmounting_();
            _parent_element_.replaceChild(_temp_element_, _element_);
            _previous_component_._unmounted_();
            update_._mounting_();
            _parent_element_.replaceChild(update_._get_element_(), _temp_element_);
            update_._mounted_();
            _previous_component_._updated_();
            update_._mount_children_();
        }
    }
}

function _update_component_(component_, update_) {
    update_._set_parent_(component_._get_parent_());
    update_._set_parent_element_(component_._get_parent_element_());
    let _element_ = component_._get_element_();
    if (_element_ != null) {
        if (component_._update_() === true) {
            let _parent_element_ = _element_.parentElement,
                _temp_element_ = document.createElement("span");
            component_._unmounting_();
            _parent_element_.replaceChild(_temp_element_, _element_);
            component_._unmounted_();
            update_._mounting_();
            _parent_element_.replaceChild(update_._get_element_(), _temp_element_);
            update_._mounted_();
            component_._updated_();
            update_._mount_children_();
        }
    }
}

function _create_instance_reference_(){
    return {
        _is_instance_reference_:true,
        _instance_:null,
        getInstance(){
            return this._instance_
        }
    }
}

function _create_component_(tag_, props_ = {}, ...children_) {
    let _element_ = null,
        _component_key_ = _get_unique_id_();
    let _children_ = children_.filter((_item_) => {
        return _item_ != null;
    }).map((_child_) => {
        if (_is_string_(_child_)) {
            return _wrapped_component_(_child_);
        } else if (_is_component_(_child_)) {
            return _child_;
        } else {
            return null;
        }
    }).filter((_item_) => {
        return _item_ != null;
    });
    if (_is_string_(tag_)) {
        _element_ = _create_element_(tag_, {
            ...props_,
            stark_ui_component_key: _component_key_
        });
    } else if (_is_class_(tag_)) {
        let _instance_ = _create_class_instance_(tag_, props_);
        _instance_._set_children_(_children_);
        _children_.map((_child_) => {
            _child_._set_parent_(_instance_._get_component_());
        });
        return _instance_._get_component_();
    }
    let component_ = {
        _is_stark_ui_component_: true,
        _component_key_: _component_key_,
        parent_: null,
        parent_element_: null,
        element_: _element_,
        children_: _children_,
        mounted_: false,
        state_: null,
        props_: props_,
        class_instance_: null,
        _mounting_() {
            if (this.class_instance_ != null) {
                this.class_instance_.mounting();
            }
        },
        _unmounting_() {
            if (this.class_instance_ != null) {
                this.class_instance_.unmounting();
            }
        },
        _mounted_() {
            if (this.class_instance_ != null) {
                this.class_instance_.mounted();
            }
        },
        _unmounted_() {
            if (this.class_instance_ != null) {
                this.class_instance_.unmounted();
            }
        },
        _updated_() {
            if (this.class_instance_ != null) {
                this.class_instance_.updated();
            }
        },
        _update_() {
            if (this.class_instance_ != null) {
                return this.class_instance_.update();
            }
            return true;
        },
        _get_component_key_() {
            return this._component_key_;
        },
        _set_parent_(_parent_) {
            if (_parent_ != null) {
                this.parent_ = _parent_;
                this.parent_element_ = _parent_._get_element_();
            }
        },
        _get_parent_() {
            return this.parent_;
        },
        _set_parent_element_(_element_) {
            this.parent_element_ = _element_;
        },
        _get_parent_element_() {
            return this.parent_element_;
        },
        _set_element_(_element_) {
            this.element_ = _element_;
        },
        _get_element_() {
            return this.element_;
        },
        _set_state_(_state_) {
            this.state_ = _state_;
        },
        _get_state_() {
            return this.state_;
        },
        _set_props_(_props_) {
            this.props_ = _props_;
        },
        _get_props_() {
            return this.props_;
        },
        _set_children_(_children_) {
            this.children_ = _children_;
        },
        _get_children_() {
            return this.children_;
        },
        _mount_children_() {
            this.children_.map((_child_) => {
                _child_._mount_();
            });
        },
        _unmount_children_() {
            this.children_.map((_child_) => {
                _child_._unmount_();
            });
        },
        _mount_() {
            this._mounting_();
            this.parent_element_.appendChild(this._get_element_());
            this._mounted_();
            this._mount_children_();
            this.mounted_ = true;
        },
        _unmount_() {
            this._unmounting_();
            this._unmount_children_();
            this.parent_element_.removeChild(this._get_element_());
            this._unmounted_();
            this.mounted_ = false;
        },
        _get_class_instance_(){
            return this.class_instance_;
        }
    }
    _children_.map((_child_) => {
        _child_._set_parent_(component_);
    });
    _stark_ui_components_._add_component_(_component_key_, component_);
    return component_;
}

function _wrapped_component_(text_) {
    let component_ = _create_component_("span", {
        textContent: text_
    });
    component_._is_wrapped_component_ = true;
    component_._wrapped_text_ = text_;
    return component_
}

function _create_class_(properties_ = {}) {
    _assert_properties_(properties_, ["render"]);
    _delete_properties_(properties_, ["setState", "getProps", "getState"]);
    return {
        _is_stark_ui_component_class_: true,
        _properties_: _default_class_properties_(properties_)
    }
}

function _create_class_instance_(class_ = {}, props_ = {}) {
    let properties_ = class_._properties_,
        _props_ = properties_.defaultProps(),
        _instance_key_ = _get_unique_id_();
    let _instance_ = {
        _is_stark_ui_component_class_instance_: true,
        _instance_key_: _instance_key_,
        props_: Object.assign(_props_, props_),
        state_: null,
        component_: null,
        children_: null,
        updating_: false,
        _start_update_() {
            this.updating_ = true;
        },
        _finish_update_() {
            this.updating_ = false;
        },
        _get_instance_key_() {
            return this._instance_key_;
        },
        _set_props_(_props_) {
            this.props_ = _props_;
        },
        _set_children_(_children_) {
            this.children_ = _children_;
        },
        _get_component_() {
            return this.component_;
        },
        _initialize_() {
            let _component_ = this.render();
            if (_component_ == null) {
                _component_ = _wrapped_component_("");
            }
            if (_is_string_(_component_)) {
                _component_ = _wrapped_component_(_component_);
            }
            this.component_ = _component_;
            this._bind_component_(_component_);
        },
        _bind_component_(component_) {
            component_.class_instance_ = this;
        },
        getChildren() {
            return this.children_;
        },
        getProps() {
            return this.props_;
        },
        getState() {
            return this.state_;
        },
        updateState(state_ = {}) {
            let _state_ = this.getState();
            Object.assign(_state_, state_);
            this.state_ = _state_;
        },
        setState(state_ = {}) {
            let _state_ = this.getState();
            Object.assign(_state_, state_);
            this.state_ = _state_;
            let _component_ = this.render();
            if (_component_ == null) {
                _component_ = _wrapped_component_("");
            }
            if (_is_string_(_component_)) {
                _component_ = _wrapped_component_(_component_);
            }
            this._bind_component_(_component_);
            _update_component_(this._get_component_(), _component_);
            this.component_ = _component_;
        }
    }
    Object.assign(_instance_, properties_);
    _instance_.state_ = _instance_.defaultState();
    _instance_._initialize_();
    if(props_.reference !=null && _is_instance_reference_(props_.reference)===true){
        props_.reference._instance_=_instance_;
    }
    _stark_ui_instances_._add_instance_(_instance_key_, _instance_);
    return _instance_;
}

function _render_(component_, element_) {
    _assert_non_null_(component_);
    _assert_non_null_(element_);
    element_.innerHTML = "";
    if (_is_component_(component_)) {
        component_._set_parent_element_(element_);
        component_._mount_();
    } else if (_is_string_(component_) || _is_number_(component_)) {
        element_.textContent = component_;
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

function _application_(props={}){
    return {
        activityMap:props.activityMap || {},
        baseElement:props.baseElement || document.body,
        currentActivity:null,
        openActivity(title){
            let activity=this.activityMap[title] || null;
            this.showActivity(activity,title);
        },
        showActivity(activity,title){
            this.activityMap[title]=activity;
            this.currentActivity={
                title:title,
                activity:activity
            };
            window.location.hash = title;
            _s_rnd_(activity,this.baseElement);
        },
        render(){
            this.baseElement.textContent="";
            if (this.currentActivity != null) {
                _render_(this.currentActivity, this.baseElement);
            }
        }
    }
}

const StarkUI = {
    Class: _create_class_,
    Component: _create_component_,
    InstanceReference:_create_instance_reference_,
    Render: _render_,
    Store: _store_,
    Application: _application_,
    Events:_evs_
}
