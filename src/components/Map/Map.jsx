import React from 'react'
import GoogleMapReact from 'google-maps-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import  LocationOutlined from '@material-ui/icons/LocationCityOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery ('(min-width: 600px)');
  return (
    <div>
      <h1>Map</h1>
    </div>
  )
}

export default Map
