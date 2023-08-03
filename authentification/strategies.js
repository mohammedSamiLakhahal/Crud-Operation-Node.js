import  passportJWT  from 'passport-jwt';
const { ExtractJwt, Strategy } = passportJWT

const jwtOptions = {
    secretOrKey: process.env.TOKEN_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const notreStrategy = new Strategy(jwtOptions, (payload, done) => {
    const user = client.findOne({ where: { id: payload.id } })
    if (user) {
        done(null, user)
        return;
    } else {
        done(null, false)
        return
    }
})

export default notreStrategy