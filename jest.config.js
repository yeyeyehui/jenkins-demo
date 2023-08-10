/*
 * 有关每个配置属性的详细说明，请访问:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // 测试中所有导入的模块都应该被自动模拟
  // automock: false,

  // 在“n”次失败后停止运行测试
  // bail: 0,

  // Jest应该在该目录中存储其缓存的依赖项信息
  // cacheDirectory: "C:\\Users\\wangzhipeng\\AppData\\Local\\Temp\\jest",

  // 在每次测试前自动清除模拟调用、实例和结果
  clearMocks: true,

  // 指示在执行测试时是否应该收集覆盖率信息
  collectCoverage: true,

  //  一个glob模式的数组，指示应该为其收集覆盖率信息的一组文件
  // collectCoverageFrom: undefined,

  //  Jest应该在其中输出其覆盖文件的目录
  coverageDirectory: "coverage",

  // 用于跳过覆盖率收集的regexp模式字符串数组
  // coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  // 指示应该使用哪个提供者来检测覆盖范围的代码
  coverageProvider: "v8",

  // 杰斯特在写报道时使用的记者名单
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // 为覆盖率结果配置最小阈值强制执行的对象
  // coverageThreshold: undefined,

  // 到自定义依赖项提取器的路径
  // dependencyExtractor: undefined,

  // 使调用已弃用的api时抛出有用的错误消息
  // errorOnDeprecated: false,

  // 使用glob模式数组强制从被忽略的文件中进行覆盖率收集
  // forceCoverageMatch: [],

  // 导出异步函数的模块路径，该异步函数在所有测试套件之前触发一次
  // globalSetup: undefined,

  // 导出异步函数的模块路径，该异步函数在所有测试套件完成后被触发一次
  // globalTeardown: undefined,

  // 需要在所有测试环境中可用的一组全局变量
  // globals: {},

  // 用于运行测试的最大工作人员数量。可以指定为%或一个数字。例如，maxWorkers: 10%将使用10%的CPU数量+ 1作为最大的worker数量。maxWorkers: 2最多使用2个worker。

  maxWorkers: "90%",

  // 从需要的模块位置递归搜索的目录名数组
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // 模块使用的文件扩展名数组
  // moduleFileExtensions: [
  //   "js",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // 从正则表达式到模块名或模块名数组的映射，允许用单个模块清除资源
  // moduleNameMapper: {},

  // regexp模式字符串数组，匹配模块加载器认为“可见”之前的所有模块路径
  // modulePathIgnorePatterns: [],

  // 激活测试结果的通知
  // notify: false,

  // 指定通知方式的enum。要求{notify: true}
  // notifyMode: "failure-change",

  // 作为Jest配置基础的预设
  // preset: undefined,

  // 运行来自一个或多个项目的测试
  // projects: undefined,

  // 使用此配置选项可将自定义记者添加到Jest
  // reporters: undefined,

  // 每次测试前自动重置模拟状态
  // resetMocks: false,

  // 在运行每个测试之前，重置模块注册表
  // resetModules: false,

  // 到自定义解析器的路径
  // resolver: undefined,

  // 在每次测试前自动恢复模拟状态和实现
  // restoreMocks: false,

  // Jest应该扫描其中的测试和模块的根目录
  // rootDir: undefined,

  // Jest应该用来在其中搜索文件的目录路径列表
  // roots: [
  //   "<rootDir>"
  // ],

  // 允许您使用自定义运行器，而不是Jest的默认测试运行器
  // runner: "jest-runner",

  // 到模块的路径，这些模块在每次测试之前运行一些代码来配置或设置测试环境
  // setupFiles: ["./pages/utils/jestSetup.ts"],

  // 模块路径列表，这些模块在每次测试前运行一些代码来配置或设置测试框架
  setupFilesAfterEnv: [],

  // 在此之后，测试被认为是慢的，并在结果中报告慢的秒数。
  // slowTestThreshold: 5,

  // Jest应该用于快照测试的快照序列化器模块的路径列表
  // snapshotSerializers: [],

  // 将用于测试的测试环境
  testEnvironment: "jsdom",

  // 将传递给testEnvironment的选项
  // testEnvironmentOptions: {},

  //  向测试结果添加位置字段
  // testLocationInResults: false,

  // Jest用于检测测试文件的glob模式
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // 针对所有测试路径匹配的regexp模式字符串数组，跳过匹配的测试
  testPathIgnorePatterns: [
    "/node_modules/",
    "/cmd/",
    "/internal/",
    "/dist/",
    "/dist_serve/",
    "/coverage/",
    "/.vscode/",
    "/logs/",
    "/.husky/",
    "/.public/",
    "/.scripts/",
  ],

  // Jest用于检测测试文件的regexp模式或模式数组
  // testRegex: [],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$'

  // 此选项允许使用自定义结果处理器
  // testResultsProcessor: undefined,

  // 这个选项允许使用一个定制的测试运行器
  // testRunner: "jest-circus/runner",

  // 该选项设置jsdom环境的URL。它反映在location.href等属性中
  // testURL: "http://localhost",

  // 将此值设置为"fake"允许为"setTimeout"等函数使用伪计时器。
  // timers: "real",

  // 从正则表达式到路径到转换器的映射
  transform: {
    "^.+\\.(tsx|ts)?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".spec.ts": "tsx",
        },
      },
    ],
  },

  // 匹配所有源文件路径的regexp模式字符串数组，匹配的文件将跳过转换
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // 在模块加载器之前匹配所有模块的regexp模式字符串数组将自动返回对它们的模拟
  // unmockedModulePathPatterns: undefined,

  // 指示是否应该在运行期间报告每个单独的测试
  // verbose: undefined,

  // regexp模式数组，在以监视模式重新运行测试之前，将对所有源文件路径进行匹配
  // watchPathIgnorePatterns: [],

  // 是否使用看门人进行文件爬行
  // watchman: true,
};
