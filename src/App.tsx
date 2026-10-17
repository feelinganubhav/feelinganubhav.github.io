import { useState } from 'react'
import { profiles, type ProfileId } from './data/profile'
import ProfilePicker from './components/ProfilePicker'
import Site from './components/Site'

const KEY = 'series-profile'

function load(): ProfileId | null {
  try {
    const v = localStorage.getItem(KEY)
    return profiles.some((p) => p.id === v) ? (v as ProfileId) : null
  } catch {
    return null
  }
}

export default function App() {
  const [profile, setProfile] = useState<ProfileId | null>(load)

  const choose = (id: ProfileId | null) => {
    setProfile(id)
    try {
      if (id) localStorage.setItem(KEY, id)
      else localStorage.removeItem(KEY)
    } catch {
      /* storage unavailable, fine */
    }
  }

  return profile ? (
    <Site profile={profile} onSwitch={() => choose(null)} />
  ) : (
    <ProfilePicker onPick={choose} />
  )
}
