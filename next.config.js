/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    // next dev による AGENTS.md の自動生成を無効化（エージェント向けの指示は CLAUDE.md で管理）
    agentRules: false,
};
