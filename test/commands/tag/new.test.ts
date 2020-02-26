import {expect, test} from '@oclif/test'

describe('commands', () => {
  describe('tag', () => {
    describe('new', () => {
      test
      .stdout()
      .command(['new'])
      .it('runs new', ctx => {
        expect(ctx.stdout).to.contain('new helloworld')
      })

      test
      .stdout()
      .command(['new', '--name', 'jeff'])
      .it('runs new --name jeff', ctx => {
        expect(ctx.stdout).to.contain('new jeff')
      })
    })
  })
})
