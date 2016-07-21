class Template < ActiveRecord::Base
  has_many :tags
  has_many :reviews
end