import {createTestVariants} from '@flemist/test-variants'
import {rollupBuild} from 'src/test/rollupBuild'
import svelte from 'rollup-plugin-svelte'

describe('rollupPluginCss', async function () {
  const testVariants = createTestVariants(async ({
    x,
  }: {
    x: number
  }) => {
    const {build, outputs} = await rollupBuild({
      options: {
        input : 'src/test/assets/app.svelte',
        output: {

        },
        plugins: [
          svelte({
            // preprocess,
            compilerOptions: {
              enableSourcemap: false,
              hydratable     : true,
              css            : false,
            },
            emitCss: false,
            // onwarn: onwarnSvelte,
          }),
        ],
      },
    })

    const results = outputs.flatMap(({output}) => {
      return output.map((o: any) => {
        return {
          name          : o.name,
          facadeModuleId: o.facadeModuleId,
          fileName      : o.fileName,
          code          : o.code,
        }
      })
    })
    console.log(
      JSON.stringify(results, null, 2),
    )
  })

  it('variants', async function () {
    await testVariants({
      x: [0],
    })()
  })
})
