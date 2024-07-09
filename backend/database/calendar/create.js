import supabase from '../supabase'

const createDate = async ({ DateTo, Motive }) => {
  const { error } = await supabase
    .from('Calendar')
    .insert([
      { DateTo, Motive },
    ])
  if (error) {
    return { error }
  }
  return { success: true }
}

const createUser = async ({ email, password, username }) => {
  try {
    const { data, error } = await supabase
      .auth
      .signUp({
        email,
        password,
        username,
      })

    if (error) {
      console.log(error)
      return { error }
    }
    // Puedes devolver el token junto con otros datos si lo deseas
    return data
  } catch (error) {
    console.error('Error al crear usuario:', error.message)
    return { error }
  }
}

const confirmToken = async ({ token }) => {
  try {
    // Verifica el token en Supabase
    const { error } = await supabase.auth.verifyOtp({
      token_hash: token,
      type: 'email',
    })

    // Retorna el error si no se pudo verificar el token
    return error
  } catch (error) {
    console.error('Error al verificar el token en Supabase:', error.message)
    throw error
  }
}

export { createDate, createUser, confirmToken }
