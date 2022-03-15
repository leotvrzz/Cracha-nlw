const LinksSocialMedia = {
  github: 'leotvrzz',
  youtube: 'leotvrz',
  facebook: 'leotvrz',
  instagram: 'leotvrz.lab',
  twitter: 'leotvrz'
}

function ChangeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute(`class`)

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
ChangeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
