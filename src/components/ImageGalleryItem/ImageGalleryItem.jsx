import { Component } from 'react'
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal'
import s from '../../styles.module.css'

export class ImageGalleryItem extends Component {
  state = {
    displayModal: false,
  }

  toggleModal = () => {
    this.setState({
      displayModal: !this.state.displayModal,
    })
  }

  render() {
  const { smallUrl, largeUrl, desc } = this.props

    return (
      <>
        <li className={s.ImageGalleryItem}>
          <img src={smallUrl} alt={desc} onClick={this.toggleModal}/>
        </li>
        {this.state.displayModal && <Modal largeUrl={largeUrl} desc={desc} toggleModal={this.toggleModal} />}
      </>
    )
  }
}

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}