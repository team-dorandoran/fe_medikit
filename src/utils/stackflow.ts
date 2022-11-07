import HomePage from 'components/elements/HomePage'
import { stackflow } from '@stackflow/react'
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic'
import { basicUIPlugin } from '@stackflow/plugin-basic-ui'
import '@stackflow/plugin-basic-ui/index.css'

import AddQa from 'components/elements/AddQa'

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    HomePage,
    AddQa,
  },
  initialActivity: () => 'HomePage',
})
