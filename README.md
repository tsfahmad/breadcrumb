# Breadcrumb

This is very basic implementation of Breadcrumb and it requires @material/core as dependency 
to show the dropdown if item exceeds.

To use the Component import the library as

```javascript
import BreadcrumbView from 'react-breadcrumb-component';
````

The Component takes 2 props and they are items and onClick.

Below code is an example to use the Component
```javascript

const BreadcrumbData = [
  {
    id: 'home',
    label: 'Home'
  }, {
    id: 'kitchen',
    label: 'Kitchen'
  }, {
    id: 'appliances',
    label: 'Appliances'
  }, {
    id: 'wM',
    label: 'Washing Machine'
  }, {
    id: 'Whirlpool',
    label: 'Washing Machine'
  }
];

const breadCrumbItemClick = (itemId) => {
  console.log(itemId);
};

const App = () => (
    <BreadcrumbView items={BreadcrumbData} onClick={breadCrumbItemClick}/>
);

ReactDOM.render(<App />, document.getElementById('root'));

```

Thank you for reading.
I would love to answer your queries! Please feel free to write your feedbacks, they would be appreciated!
 