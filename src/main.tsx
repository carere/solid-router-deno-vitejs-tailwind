import { ComponentProps } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Subject } from "rxjs";
import "./main.css";

import Home from "./pages/Home.tsx";
import Users from "./pages/User.tsx";
import NotFound from "./pages/NotFound.tsx";

const s = new Subject();
s.subscribe((value) => console.log(value));

const App = (props: ComponentProps<"main">) => (
  <main onClick={() => s.next(42)}>
    <nav>
      <a href="/user">User</a>
      <a href="/">Home</a>
    </nav>
    <h1>My Site with lots of pages</h1>
    {props.children}
  </main>
);

render(() => (
  <Router root={App}>
    <Route path="/user" component={Users} />
    <Route path="/" component={Home} />
    <Route path="*404" component={NotFound} />
  </Router>
), document.getElementById("main") as HTMLElement);
