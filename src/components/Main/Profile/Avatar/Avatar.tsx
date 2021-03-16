import React from 'react'
import styles from './Avatar.module.css'
import { PhotosType } from '../../../../types/types'

type Props = {
  photos: PhotosType
  onPhotoSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  isOwner: boolean
  editMode: boolean
  setEditMode: (isEdit: boolean) => void
}

export const Avatar = ({
  photos,
  onPhotoSelect,
  isOwner,
  editMode,
  setEditMode,
}: Props) => (
  <div className={styles.container}>
    <div className={styles.avatar}>
      {photos.large == null ? (
        <img src={require('../About/ProfileInfo/cat.jpg')} />
      ) : (
        <img src={photos.large} />
      )}
      {isOwner && (
        <label>
          <button className={styles.loadImageButton}>Change Image</button>
          <input
            type="file"
            onChange={onPhotoSelect}
            className={styles.loadImage}
          />
        </label>
      )}
      {isOwner && (
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Save' : 'Settings'}
        </button>
      )}
    </div>
  </div>
)
