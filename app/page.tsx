import { RepoUpload } from '@/components/repo-upload';
import { RepoList } from '@/components/repo-list';
import { SearchFilters } from '@/components/search-filters';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">
            Upload Folders
          </h1>
          <p className="text-muted-foreground max-w-[600px]">
            Upload, manage, and collaborate on your repositories with ease.
            Experience seamless development workflow with our modern tools.
          </p>
        </div>
        <RepoUpload />
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Your Repositories
          </h2>
          <SearchFilters />
        </div>
        <RepoList />
      </section>
    </div>
  );
}