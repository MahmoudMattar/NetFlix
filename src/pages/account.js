import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'
import { SelectAccountContainer } from '../containers/account'

export default function Account() {
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}
  return (
    <>
      <SelectAccountContainer user={user} />
    </>
  )
}
