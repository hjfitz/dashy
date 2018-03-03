# dashy
dashboard for things that I use

## Todo:
- [ ] Github issues
- [ ] Toggl timers
- [ ] Notes (?)
- [x] UPSU Leaderboards
- [ ] Actually useful links
- [x] News

~~On site load, pass requests off to different web workers for POWER~~
- [ ] Run a scheduler and emit socket.io events per scheduled item

### github issues
- New issue given a list of issues, should find and notify (notification API + sound)
- Give a list of repos to track

### toggl timers
- give a list of things to track

### Notes
- Stored in a SS redis store
- make a note!

### Leaderboards
- socket driven
- realtime info based on https://upsu-leaderboard.herokuapp.com/
- [ ] move to axios

### Actually useful links
- github repos
  - toggle between issue tracker/pull requests/repo
- ???

### News
- Mix of headlines from 
  - dev.to
    - use twitter api
  - hn
    - firebase api
  - hackernoon
  - /r/webdev
