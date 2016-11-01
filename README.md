
# React-Flipper

React 'flipper' component that is agnostic to the height of its tiles, resizing accordingly. No jQuery.

## Get Started
* Clone the repository
```
git@gitlab.com:enriquecaballero/react-flipper.git
```

* Go into the cloned repository's directory
```
cd react-flipper
```

* Install dependencies
```
npm install
```

## Usaged

```javascript
class MySuperDuperAwesomeApp extends Component {
  constructor (props) {
    super (props);
    this.state = { isFlipped: false };
  }
  _flip () {
    this.setState ({ isFlipped: !this.state.isFlipped });
  }
  render () {
    return <div>
      <Flipper isFlipped={this.state.isFlipped} orientation="horizontal">
        <Front style={{
          minHeight: 250,
          background: '#19489E'
        }}>
          /** PLACE FRONT CONTENT HERE **/
        </Front>
        <Back style={{
          background: '#9E1919',
          minHeight: 400
        }}>
          /** PLACE BACK CONTENT HERE **/
        </Back>
      </Flipper>
    </div>
  }
}

```
**A few things to note:**
1. Both, front and back tiles, have no styles -- styling is completely up to you.
2. **minHeight** is not necessary -- each tile will default to 30px; height is adjusted accordingly upon mount.


## Running for development
- Bundle the static files and watch over development files
```
npm run dev
```
- Open ```dist/index.html``` in your browser and refresh upon making a change -- webpack should have already rebundled your static files.

## Prepare for publishing
Bundled static files will live inside the ```lib``` directory
```
+ lib/
    \-- index.js
```

- Build the component library

  ```
  npm run build
  ```

Deploy to GitHub Pages
