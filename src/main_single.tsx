import { Component, ComponentProps } from "solid-js";
import { render } from "solid-js/web";
import "./main.css";

const App: Component<ComponentProps<"main">> = (props) => (
  <main class={props.class}>
    <h1 class="bg-yellow-400">Single simple page</h1>
  </main>
);

render(() => <App />, document.getElementById("main") as HTMLElement);
