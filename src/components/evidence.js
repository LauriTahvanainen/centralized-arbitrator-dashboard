import Mime from 'mime-types'
import PropTypes from 'prop-types'
import React from 'react'

class Evidence extends React.Component {
  typeToIcon = type => {
    console.log('typetoicon')
    console.log(type)
    switch (type) {
      case 'video':
        return 'video.svg'
      case 'image':
        return 'image.svg'
      default:
        return 'text.svg'
    }
  }

  render() {
    const { fileURI, ipfsGateway } = this.props

    return (
      <a href={ipfsGateway + fileURI} rel="noopener noreferrer" target="_blank">
        {' '}
        <img
          alt=""
          className="m-1"
          src={this.typeToIcon(
            Mime.lookup(fileURI.split('.')[1])
              .toString()
              .split('/')[0]
          )}
        />
      </a>
    )
  }
}

Evidence.propTypes = {
  fileURI: PropTypes.string.isRequired,
  ipfsGateway: PropTypes.string.isRequired
}

export default Evidence
