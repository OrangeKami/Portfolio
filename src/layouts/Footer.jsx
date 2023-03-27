import Typography from '@mui/material/Typography';
import React from 'react';

import {siteInfo} from '../constants/siteInfo';

const Footer = () => {
  const nowDate = new Date();
  return (
    <footer
      css={(theme) => ({
        marginTop: "auto",
        padding: theme.spacing(3),
        borderTop: `1px solid ${theme.vars.palette.divider}`,
        marginBottom: `env(safe-area-inset-bottom, 0px)`,
      })}
      role="contentinfo"
    >
    <Typography variant="body2" color="textSecondary" align="center">
      {`© ${nowDate.getFullYear()} ${siteInfo.firstName} ${siteInfo.lastName}`}
    </Typography>
    </footer>
  )
}

export default Footer