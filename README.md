# reactjs

Learning React

- React.Fragment, <></> - wrapper element, empty open/close tag in JSX
- Dynamically set component type
  - Eg: /_<Tabs container="menu"><p></p></Tabs>_/
    ==> 'menu' is in built-component type, for custom created components {Menu} should be given
  - function Tabs({ children, container }) {
    const Container = container;
    return <Container>{children}</Container>;
    }
