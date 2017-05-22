
# react-flipper

React 'flipper' component that is agnostic to the height of its tiles, resizing accordingly. No jQuery.

[![Build Status](https://travis-ci.org/VisionistInc/react-flipper.svg?branch=master)](https://travis-ci.org/VisionistInc/react-flipper) [![Greenkeeper badge](https://badges.greenkeeper.io/enriquecaballero/branchsite.svg)](https://greenkeeper.io/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Get Started
* Clone the repository
```
$ git clone git@github.com:VisionistInc/react-flipper.git
```

* Go into the cloned repository's directory
```
$ cd react-flipper/
```

* Install dependencies
```
$ yarn install
```

## Usage

```javascript
class MySuperDuperAwesomeApp extends Component {
  constructor (props) {
    super (props);
    this.state = { isFlipped: false };
  }
  flip = () => {
    this.setState ({ isFlipped: !this.state.isFlipped });
  }
  render () {
    return <div>
      <button onClick={this.flip}>
        Flip!
      </button>
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
```
$ npm start
```

## Contributing

Use GitHub to fork this project, make and commit your changes, and then [submit a new pull request](https://github.com/VisionistInc/react-flipper/pulls).

### Updating `gh-pages`

We're just using the `dist` directory on the `gh-pages` branch to showcase our [demo](./src/website/Website.jsx).

After making your changes, run:

```shell
$ npm run build

# !! commit your changes here !!

$ git subtree push --prefix dist origin gh-pages
```

This updates the bundled code in the `dist` directory, then you commit the updated source, then push the `dist` directory to the root of the `gh-pages` branch.
