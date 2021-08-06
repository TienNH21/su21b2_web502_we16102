import { UserCreate } from "./Components/Users/UserCreate.js";
import { UserIndex } from "./Components/Users/UserIndex.js";
import { UserEdit } from "./Components/Users/UserEdit.js";
import { Component } from "./Components/Component.js";

declare const window: any;

type Route = {
  name: string;
  path: string | RegExp;
};

type Match = {
  url: string;
  queryString: string;
  hashString: string;
  route: Route;
  data: { [key: string]: string } | null;
  params: { [key: string]: string } | null;
};

const routes = () => {
  window.router
    .on('/users/index', async () => {
      const gui: Component = new UserIndex();
      await gui.render();
      gui.afterRender();
    })
    .on('/users/create', async () => {
      const gui: Component = new UserCreate();
      await gui.render();
      gui.afterRender();
    })
    .on('/users/edit/:id', async (params: Match) => {
      /*
       * params?.data?.id
       * Kiểm tra trong params có data không?
       * Nếu có -> truy xuất tới data. Nếu không -> undefined;
       * Tương tự với id
       */
      const id = params?.data?.id;
      const gui: Component = new UserEdit(id);
      await gui.render();
      gui.afterRender();
    })
    .on('/users/delete/:id', async (params: Match) => {
      //
    })
    .resolve();
}

routes();
