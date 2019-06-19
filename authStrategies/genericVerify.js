export function genericVerify(accessToken, refreshToken, profile, done) {
    profile.login = profile.id;
    profile.email = profile.emails
        ? profile.emails[0].value
        : 'email is not available';
    done(null, profile);
}