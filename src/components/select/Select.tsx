import React from "react";
import { useSelectState } from "@react-stately/select";
import { useSelect, HiddenSelect } from "@react-aria/select";
import { useListBox, useOption } from "@react-aria/listbox";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-aria/button";
import { useFocus } from "@react-aria/interactions";
import { FocusScope } from "@react-aria/focus";
import { useOverlay, DismissButton } from "@react-aria/overlays";
import Arrow from "../../images/png/Arrow.png";

function Select(props) {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = React.useRef();
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  //   console.log(state.selectedItem?.props?.children);
  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...buttonProps}
        ref={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        <span {...valueProps}>
          {state.selectedItem ? state.selectedItem.rendered : props.name}
        </span>
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
        >
          <img
            src={Arrow}
            alt="arrow"
          />
        </span>
      </button>
      {state.isOpen && (
        <ListBoxPopup
          {...menuProps}
          state={state}
        />
      )}
    </div>
  );
}

export default Select;

function ListBoxPopup({ state, ...otherProps }) {
  const ref = React.useRef();

  // Get props for the listbox
  const { listBoxProps } = useListBox(
    {
      autoFocus: state.focusStrategy || true,
      disallowEmptySelection: true,
      ...otherProps,
    },
    state,
    ref
  );

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.useRef();
  const { overlayProps } = useOverlay(
    {
      onClose: () => state.close(),
      shouldCloseOnBlur: true,
      isOpen: state.isOpen,
      isDismissable: true,
    },
    overlayRef
  );

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the popup is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <div
        {...overlayProps}
        ref={overlayRef}
      >
        <DismissButton onDismiss={() => state.close()} />
        <ul
          {...mergeProps(listBoxProps, otherProps)}
          ref={ref}
          style={{
            position: "absolute",
            width: "100%",
            margin: "4px 0 0 0",
            padding: 0,
            listStyle: "none",
            border: "1px solid gray",
            background: "lightgray",
          }}
        >
          {[...state.collection].map((item) => (
            <Option
              key={item.key}
              item={item}
              state={state}
            />
          ))}
        </ul>
        <DismissButton onDismiss={() => state.close()} />
      </div>
    </FocusScope>
  );
}

function Option({ item, state }) {
  // Get props for the option element
  const ref = React.useRef();
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused option
  const [isFocused, setFocused] = React.useState(false);
  const { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected
          ? "blueviolet"
          : isFocused
          ? "gray"
          : "transparent",
        color: isSelected || isFocused ? "white" : "black",
        padding: "2px 5px",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {item.rendered}
    </li>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
