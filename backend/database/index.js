import createDate from './calendar'
import supabase from './supabase'

const obtainProjects = async () => {
  const { data, error } = await supabase.from('Projects').select('*')
  if (error) {
    console.error('Error obtaining projects:', error)
    return []
  }
  return data
}

export { createDate, obtainProjects }
