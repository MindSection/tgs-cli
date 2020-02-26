import {expect, test} from '@oclif/test'

describe('newtag', () => {
  test
    .stdout()
    .command(['newtag'])
    .it('runs newtag', ctx => {
      expect(ctx.stdout).to.contain('newtag helloworld')
    })

  test
    .stdout()
    .command(['newtag', '--name', 'jeff'])
    .it('runs newtag --name jeff', ctx => {
      expect(ctx.stdout).to.contain('newtag jeff')
    })
})
