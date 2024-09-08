const ExampleComponent = () => {
  return (
    <div>
      <h1>Example Component</h1>
    </div>
  );
};

export const TABS = [
  {
    id: 1,
    title: 'Home',
    Component: ExampleComponent,
  },
  {
    id: 2,
    title: 'About',
    Component: ExampleComponent,
  },
  {
    id: 3,
    title: 'Contact',
    Component: ExampleComponent,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
