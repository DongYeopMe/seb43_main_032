import { Tech } from '@/types/project';
import { api } from '@/util/api';
import { mergeData, updateData } from '@/util/user';
import React, { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import styled from 'styled-components';
import EditInput from './EditInput';
import SelectStack from '../stack/SelectStack';
import { useRouter } from 'next/router';
import { AiFillCamera } from 'react-icons/ai';
import EditTextArea from './EditTextArea';
import Tag from '../Tag';
import { POSITIONS, POST_COMMUNITY_CATEGORY } from '@/constant/constant';
import { FilterButton } from '@/pages/users';
import { User } from '@/types/user';
import useUser from '@/hooks/react-query/useUser';

export default function UserEditForm({ user }: { user: User }) {
  const { updateUser } = useUser({});
  const initialPosition = Object.keys(POST_COMMUNITY_CATEGORY).find(
    (key) => POST_COMMUNITY_CATEGORY[key] === user.position
  );
  const index = initialPosition ? POSITIONS.indexOf(initialPosition) : -1;

  const { register, handleSubmit, watch } = useForm();
  const [imgPreview, setImgPreview] = useState<string>('');
  const [stacks, setStacks] = useState<Tech[]>(user.techList);
  const [filter, setFilter] = useState(index);
  const [submitLoading, setSubmitLoading] = useState(false);
  const filterHandler = (idx: number) => {
    if (filter === idx) {
      return setFilter(-1); //다시 한 번 필터가 눌렸을 땐, 전체 카드가 조회되기위해
    }
    setFilter(idx);
  };
  const image = watch('image');
  const router = useRouter();

  const onValid = async (data: any) => {
    setSubmitLoading(true);
    data.position = POST_COMMUNITY_CATEGORY[POSITIONS[filter]];
    await mergeData(data, image, stacks);
    const updatedData = updateData(user, data);

    updateUser.mutate(updatedData, {
      onSuccess: () => {
        alert('정보가 수정 되었습니다.');
        router.push('/users/me');
      },
      onError: (error) => {
        console.error(error);
        alert('정보 수정에 실패했습니다.');
        setSubmitLoading(false);
      },
    });
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  useEffect(() => {
    if (image && image.length > 0) {
      setImgPreview(URL.createObjectURL(image[0]));
    }
  }, [image]);

  return (
    <Form onSubmit={handleSubmit(onValid, onInValid)}>
      <ProfileBox>
        <ImgWrapper>
          <img src={imgPreview ? imgPreview : user.profileImageUrl} />
          <div className="label">
            <label htmlFor="image">
              <AiFillCamera size={30} color="#9b7aff" />
            </label>
            <input
              {...register('image')}
              id="image"
              type="file"
              accept="image/*"
            />
          </div>
        </ImgWrapper>
        <div className="nameBox">
          <div className="top">
            <EditInput
              label="아이디"
              placeholder={user.name}
              register={register('name')}
            />
            <EditInput
              label="전화번호"
              placeholder={user.phone}
              register={register('phone')}
            />
          </div>
          <div className="bottom">
            <EditInput
              label="경력"
              register={register('yearOfDev', {
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Please enter only numbers',
                },
              })}
              placeholder={`${user.yearOfDev} 년차`}
            />

            <EditInput
              label="직무"
              placeholder={user.position}
              register={register('position')}
            />
          </div>
        </div>
      </ProfileBox>
      <Label>Stacks</Label>
      <SelectStack //
        stacks={stacks}
        setStacks={setStacks}
      />
      <EditInput
        label="About Me"
        placeholder={user.aboutMe}
        register={register('aboutMe')}
      />
      <EditInput
        label="Position"
        placeholder={user.position}
        register={register('position')}
      />
      <EditInput
        label="Location"
        placeholder={user.location}
        register={register('location')}
      />
      <EditInput
        label="Phone Number"
        placeholder={user.phone}
        register={register('phone')}
      />
      <ButtonBox>
        <Button>Submit</Button>
      </ButtonBox>
    </Form>
  );
}

const ImgWrapper = styled.div`
  flex-shrink: 0;
  margin: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  margin-right: 80px;
  border-radius: 50%;
  margin-top: 30px;
  border: solid 3px #ececec;
  transition: all 0.5s;
  :hover {
    border: solid 3px #9b7aff;
    img {
      opacity: 0.5;
    }
  }

  .label {
    display: flex;
    position: absolute;
    bottom: 0%;
    right: 0%;
    background: #f9f9f9;
    border: solid 2px #d4d4d4;
    border-radius: 50%;
    padding: 10px;

    svg {
      transition: all 0.5s;
    }

    :hover {
      svg {
        fill: #636363;
      }
    }
  }
  input {
    display: none;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.5s;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
  }

  .textForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  .nameBox {
    width: 100%;

    .top {
      display: flex;
      gap: 40px;
    }

    .bottom {
      display: flex;
      gap: 40px;
    }
  }
`;
const PositionBox = styled.div`
  display: flex;
  gap: 5px;
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const Button = styled.button.attrs({ className: 'nanum-bold' })`
  padding: 10px 20px;
  /* padding-bottom: 0px; */
  border: none;
  border-radius: 10px;
  font-size: 18px;
  background: none;
  color: white;
  background: #9b7aff;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #6333ff;
  }
`;
const Label = styled.p.attrs({ className: 'nanum-bold' })`
  padding-top: 20px;
  padding-bottom: 10px;
  letter-spacing: 3px;
`;

type FilterButtonProps = {
  idx: number;
  filters: number[];
};
