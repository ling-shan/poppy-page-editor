import { registerCategory } from '../core/registerCategory';

// layouts
import Layout from './Layout';
import Box from './Box';
import VerticalGap from './VerticalGap';

// typography
import Heading from './Heading';
import Text from './Text';
import RichText from './RichText';

// element
import Button from './Button';
import Card from './Card';
import Stats from './Stats';

// page
import Header from './Header';
import Hero from './Hero';
import Banner from './Banner';
import SiteMap from './SiteMap';
import Logos from './Logos';
import Feature from './Feature'

import './Root';

registerCategory({
  name: "page",
  components: [
    Header.Name,
    Hero.Name,
    Banner.Name,
    Feature.Name,
    Logos.Name,
    SiteMap.Name
  ],
})

registerCategory({
  name: "layout",
  components: [
    Layout.Name,
    Box.Name,
    VerticalGap.Name,
  ]
})

registerCategory({
  name: "typography",
  components: [
    Heading.Name,
    Text.Name,
    RichText.Name,
  ],
})

registerCategory({
  name: "element",
  components: [
    Button.Name,
    Card.Name,
    Stats.Name,
  ],
})
