import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import CommentStore from '../stores/commentStore';
import { Pagination, List } from 'antd';
import ReactPaginate from 'react-paginate';

interface Prop {
  id: string;
}

const Comments: React.FC<Prop> = ({ id }: Prop) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  let locale = {
    emptyText: 'No comments',
  };

  useEffect(() => {
    CommentStore.loadComments(id);
  }, []);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current: any, size: any) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedComments = CommentStore.comments.slice(startIndex, endIndex);

  return (
    <div>
      <List
        size="small"
        locale={locale}
        dataSource={paginatedComments}
        renderItem={(item) => (
          <List.Item>
            <Comment reply={item.Reply} />
          </List.Item>
        )}></List>
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        pageSize={pageSize}
        onShowSizeChange={handlePageSizeChange}
        showSizeChanger
        total={CommentStore.comments.length}
      />
    </div>
  );
};

export default observer(Comments);
