import React, { ChangeEvent, useState } from 'react'

import Col from 'components/common/_Grid/Col'

import styles from './AddQaContent.module.scss'
import SelectBox from 'components/common/SelectBox'
import Button from 'components/common/Button'
import { styled } from 'styles/globalStitches'

const AddQaContent = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { subject } = e.currentTarget.dataset
    subject === 'title' && setTitle(e.currentTarget.value)
    subject === 'content' && setContent(e.currentTarget.value)
  }

  return (
    <Col className={styles.wrapper}>
      <Col className={styles.contentBox}>
        <input
          className={styles.title}
          placeholder="증상을 한 문장으로 요약해 주세요"
          data-subject="title"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <input
          className={styles.content}
          placeholder="증상을 자세히 작성해 주세요"
          data-subject="content"
          type="text"
          value={content}
          onChange={handleChange}
        />
      </Col>

      <Col className={styles.drawer}>
        <span>dd</span>
        <SelectBox></SelectBox>
        <span>태그</span>
        <input type="text" />
        <Button>질문 올리기</Button>
      </Col>
    </Col>
  )
}

export default AddQaContent

// STYLE ///////////////////

const TitleInput = styled('input', {
  color: '$secondary_text',
})
