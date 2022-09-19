import { useEffect, useState, useContext } from 'react'

import PropTypes from 'prop-types'
import { Card } from 'translation-helps-rcl'
import { BIBLE_AND_OBS } from '@common/BooksOfTheBible'
import { AuthContext } from '@context/AuthContext'
import { StoreContext } from '@context/StoreContext'
import { AppContext } from '@context/AppContext'
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ReactJson from 'react-json-view';
//import { makeStyles } from '@material-ui/core/styles';

export default function ScriptureWorkspaceCard({
  bookId,
  data,
  classes,
  onClose: removeBook,
}) {

  const [usfmContent, setUsfmContent] = useState("Waiting...")

  const {
    state: {
      authentication,
    },
  } = useContext(AuthContext)

  const {
    state: {
      owner,
      server,
      languageId,
    },
  } = useContext(StoreContext)

  const { 
    state: {
        books,
    },
    actions: {
    }
  } = useContext(AppContext)


  return (
    <Card title={BIBLE_AND_OBS[bookId]} 
      classes={classes} 
      hideMarkdownToggle={true} 
      closeable={true}
      onClose={() => removeBook(bookId)}
      key={bookId}
    >
      <div className="text-sm max-w-prose">
        <pre>{data.usfmText}</pre>
      </div>
      {/* <TextareaAutosize
        // maxRows={4}
        aria-label="maximum height"
        placeholder="Empty - try another book"
        defaultValue={data.usfmText}
        style={{ width: 600 }}
      /> */}
      {/* <ReactJson
        style={{ maxHeight: '500px', overflow: 'scroll', whiteSpace: 'pre' }}
        src={content ? content: {}}
        // theme="monokai"
      />     */}
    </Card>
  )
}

ScriptureWorkspaceCard.propTypes = {
  bookId: PropTypes.string,
  classes: PropTypes.object,
}
