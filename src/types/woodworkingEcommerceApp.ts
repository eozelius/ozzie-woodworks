type TParagraphValue = {
  'value': string // 'Circular side table, hand made in Brooklyn NY.  This table features tapered legs a cross-member solid construction with half lap jointery.',
}

type TContentParagraph = {
  content: TParagraphValue[]
}

type TDropboxField = {
  id: string // 'id:SwSfvh8ezfAAAAAAAAAguA',
  icon: string // 'https://www.dropbox.com/static/images/icons64/page_white_picture.png',
  link: string // 'https://www.dropbox.com/scl/fi/89l1okp1kpsdqymxkxwmu/IMG_20240116_151238092.jpg?rlkey=omjaogp1h6ip8q1e9f2zfz51x&dl=0',
  name: string // 'IMG_20240116_151238092.jpg',
  linkType: string // 'preview',
  thumbnailLink: string // 'https://ucb73630eab6a862c40e4ad0598d.previews.dropboxusercontent.com/p/thumb/ACK-a34e9ue5vGl16-IvSaioJhLRK4MXV8VXVBFuhy4eX-t6I2sMyFw-phnszJTQSauTJSvrMgv00FK98zBK19e1Yx-5W9Fsl4U_4qR3hai_6m-pJiB1HnK2t45oDpgP6hzS8HHNEDOFcRLFBARvjLhcr5-RDzmgH9t3IlXrYO5bst7fKfdJL8d6U_-xM0-Oyo2-cyvzXt0Ix4K-YvxJM2jL5y_KBFBSGYBgFj6aEpt9wnnc4nnxGnMQWn7qv3Jmx535SL_GYg1FF_60u3rLcFlCSDf3fKTvHLj2nbYGHJc_U5H1QIkZ856FlQTFt08BKIagAt_95I6P8G_iNziEQH_a-hU4M6dy5-r53tFJAD-9IAj9D6Ymy6oDGw4u5vereGA4NUY3N8x38KWpZpy_Os9G/p.jpeg?bounding_box=75&mode=fit'
}


type TPhotoItem = {
  url:  string // "https://images.ctfassets.net/5lys9idvc0gb/1FYkh9veHqrtrRLSN5KF4l/c606ac74f2bc5ad08080434e6e28e70e/IMG_20231026_120324164_HDR.jpg",
  title:  string // "Oak tea caddy dimensions",
  description:  string // "",
  fileName:  string // "IMG_20231026_120324164_HDR.jpg"
}

export type TWoodworkingEcommerceApp = {
  description: {
    json: {
      content: TContentParagraph[]
    }
  },
  id: number // 45648535,
  title: string // 'Cherry Side table',
  dropbox?: TDropboxField[]
  photosCollection: {
    items: TPhotoItem[]
  },
  craftsperson: {
    sys: {
      id: string // '15QSyK3jS3mSRGUTbeJ3mZ'
    }
  }
}